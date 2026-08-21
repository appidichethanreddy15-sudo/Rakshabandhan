// Background Music & Audio Engine using the dedicated rakhiSong.mp3
class AmbientAudioEngine {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private listeners: Array<(isPlaying: boolean) => void> = [];

  constructor() {
    // Initialize audio element lazily on client-side
    if (typeof window !== 'undefined') {
      this.audio = new Audio('/music/rakhiSong.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.75;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('error', () => {
        // Fallback to root path if /music/ fails
        if (this.audio && this.audio.src.includes('/music/')) {
          this.audio.src = '/rakhiSong.mp3';
        }
      });
    }
  }

  public subscribe(listener: (isPlaying: boolean) => void): () => void {
    this.listeners.push(listener);
    listener(this.isPlaying);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.isPlaying));
  }

  public play(): Promise<void> | undefined {
    if (!this.audio) return;
    return this.audio.play().then(() => {
      this.isPlaying = true;
      this.notifyListeners();
    }).catch((err) => {
      console.warn('Autoplay blocked or playback failed:', err);
    });
  }

  public playFromStart(): Promise<void> | undefined {
    if (!this.audio) return;
    try {
      this.audio.currentTime = 0;
    } catch {
      // Ignore
    }
    return this.play();
  }

  public pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.notifyListeners();
  }

  public stop() {
    if (!this.audio) return;
    this.audio.pause();
    try {
      this.audio.currentTime = 0;
    } catch {
      // Ignore
    }
    this.isPlaying = false;
    this.notifyListeners();
  }

  public toggle(): boolean {
    if (!this.audio) return false;
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  // Celebration sound effect fallback using Web Audio API
  public playCelebrationChimes() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      const chimeNotes = [523.25, 659.25, 783.99, 1046.50]; // Joyful bell frequencies
      
      chimeNotes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.15);
        gain.gain.setValueAtTime(0.001, now + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.1, now + i * 0.15 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.15 + 2.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.15);
        osc.stop(now + i * 0.15 + 2.5);
      });
    } catch {
      // Ignore if AudioContext cannot start
    }
  }
}

export const ambientAudio = new AmbientAudioEngine();

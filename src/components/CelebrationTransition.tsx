import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import confetti from 'canvas-confetti';
import { Sparkles, Star } from 'lucide-react';
import { ambientAudio } from '../utils/audioEngine';

interface CelebrationTransitionProps {
  onComplete: () => void;
}

export const CelebrationTransition: React.FC<CelebrationTransitionProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation sub-stages:
  // 1: 0.0s - 0.5s: 3D Camera zooms in & ambient stardust ignites
  // 2: 0.5s - 1.0s: 3D Rakhi scales up with spring rotation
  // 3: 1.2s: "✨ Happy Raksha Bandhan ✨" appears with 3D depth
  // 4: 1.6s: "Bangaram 💜" rises + 3D Radial Shockwave & Party Burst
  // 5: 3.8s - 4.5s: Radiant light expansion & dissolve into Page 1
  const [stage, setStage] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    // Optional audio celebration sound
    try {
      ambientAudio.playCelebrationChimes();
    } catch {
      // ignore
    }

    // Stage progression timings
    const t2 = setTimeout(() => setStage(2), 500);
    const t3 = setTimeout(() => setStage(3), 1200);
    const t4 = setTimeout(() => {
      setStage(4);
      if (!mediaQuery.matches) {
        try {
          // Multi-cannon celebratory burst with gold, royal purple, and soft blush
          confetti({
            particleCount: 90,
            spread: 100,
            origin: { x: 0.5, y: 0.45 },
            colors: ['#D4AF37', '#9B5DE5', '#8B5CF6', '#C87D88', '#6C2231', '#FBF4DE', '#F472B6'],
            scalar: 1.15
          });
          confetti({
            particleCount: 35,
            angle: 60,
            spread: 55,
            origin: { x: 0.05, y: 0.75 },
            colors: ['#D4AF37', '#9B5DE5', '#FBF4DE']
          });
          confetti({
            particleCount: 35,
            angle: 120,
            spread: 55,
            origin: { x: 0.95, y: 0.75 },
            colors: ['#D4AF37', '#9B5DE5', '#FBF4DE']
          });
        } catch {
          // ignore
        }
      }
    }, 1600);
    const t5 = setTimeout(() => setStage(5), 3800);
    const tComplete = setTimeout(() => onComplete(), 4500);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(tComplete);
    };
  }, [onComplete]);

  // ==========================================
  // Three.js 3D Cinematic Scene
  // ==========================================
  useEffect(() => {
    if (!containerRef.current || reducedMotion) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 13); // Starts slightly back

    // 2. Renderer with High Performance & Anti-Aliasing
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 3. Cinematic 3D Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.2);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xffdf88, 3.2);
    goldKeyLight.position.set(5, 8, 7);
    scene.add(goldKeyLight);

    const purpleRimLight = new THREE.PointLight(0xb388ff, 4.5, 25);
    purpleRimLight.position.set(-6, -4, 4);
    scene.add(purpleRimLight);

    const centerGlowLight = new THREE.PointLight(0xffd700, 2.5, 12);
    centerGlowLight.position.set(0, 0, 2);
    scene.add(centerGlowLight);

    // 4. Construct 3D Handcrafted Rakhi Model
    const rakhiGroup = new THREE.Group();
    rakhiGroup.position.set(0, 0.9, 0); // Positioned elegantly above greeting
    rakhiGroup.scale.set(0.001, 0.001, 0.001); // Initial scale 0
    scene.add(rakhiGroup);

    // Materials
    const goldMetalMat = new THREE.MeshStandardMaterial({
      color: 0xffd060,
      metalness: 0.9,
      roughness: 0.18,
      emissive: 0x442c00,
      emissiveIntensity: 0.2
    });

    const royalPurpleMat = new THREE.MeshStandardMaterial({
      color: 0x4a1249,
      metalness: 0.5,
      roughness: 0.25,
      emissive: 0x240826,
      emissiveIntensity: 0.3
    });

    const rubyRedMat = new THREE.MeshStandardMaterial({
      color: 0x8a1c32,
      metalness: 0.4,
      roughness: 0.2
    });

    const pearlMat = new THREE.MeshStandardMaterial({
      color: 0xfffcf5,
      metalness: 0.2,
      roughness: 0.1,
      emissive: 0x332211,
      emissiveIntensity: 0.1
    });

    // Outer Golden Ring
    const outerRingGeo = new THREE.TorusGeometry(1.65, 0.1, 16, 64);
    const outerRing = new THREE.Mesh(outerRingGeo, goldMetalMat);
    rakhiGroup.add(outerRing);

    // Beaded Ring
    const numBeads = 24;
    for (let i = 0; i < numBeads; i++) {
      const angle = (i / numBeads) * Math.PI * 2;
      const beadGeo = new THREE.SphereGeometry(0.09, 12, 12);
      const bead = new THREE.Mesh(beadGeo, i % 2 === 0 ? goldMetalMat : pearlMat);
      bead.position.set(Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0.05);
      rakhiGroup.add(bead);
    }

    // Mid Purple Disc
    const midDiscGeo = new THREE.CylinderGeometry(1.35, 1.35, 0.12, 48);
    midDiscGeo.rotateX(Math.PI / 2);
    const midDisc = new THREE.Mesh(midDiscGeo, royalPurpleMat);
    rakhiGroup.add(midDisc);

    // Inner Golden Flower Ring
    const innerRingGeo = new THREE.TorusGeometry(1.05, 0.07, 16, 48);
    const innerRing = new THREE.Mesh(innerRingGeo, goldMetalMat);
    innerRing.position.z = 0.08;
    rakhiGroup.add(innerRing);

    // Central Rosette Core
    const coreGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.15, 36);
    coreGeo.rotateX(Math.PI / 2);
    const coreMesh = new THREE.Mesh(coreGeo, rubyRedMat);
    coreMesh.position.z = 0.12;
    rakhiGroup.add(coreMesh);

    // 3D Heart in Center of Rakhi
    const heartShape = new THREE.Shape();
    const x = 0, y = 0;
    heartShape.moveTo(x, y + 0.25);
    heartShape.bezierCurveTo(x, y + 0.45, x - 0.35, y + 0.55, x - 0.35, y + 0.25);
    heartShape.bezierCurveTo(x - 0.35, y - 0.05, x, y - 0.25, x, y - 0.4);
    heartShape.bezierCurveTo(x, y - 0.25, x + 0.35, y - 0.05, x + 0.35, y + 0.25);
    heartShape.bezierCurveTo(x + 0.35, y + 0.55, x, y + 0.45, x, y + 0.25);

    const extrudeSettings = { depth: 0.12, bevelEnabled: true, bevelSegments: 4, steps: 1, bevelSize: 0.03, bevelThickness: 0.04 };
    const heartGeo = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    heartGeo.center();
    const heartMesh = new THREE.Mesh(heartGeo, goldMetalMat);
    heartMesh.position.z = 0.25;
    heartMesh.scale.set(0.9, 0.9, 0.9);
    rakhiGroup.add(heartMesh);

    // 3D Curved Silk Threads (Left & Right)
    const createThread = (isLeft: boolean) => {
      const dir = isLeft ? -1 : 1;
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(dir * 1.6, 0, 0),
        new THREE.Vector3(dir * 2.8, -0.3, 0.4),
        new THREE.Vector3(dir * 4.5, 0.4, -0.3),
        new THREE.Vector3(dir * 6.5, -0.2, 0.1)
      );
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.055, 10, false);
      const threadMat = new THREE.MeshStandardMaterial({
        color: isLeft ? 0xd4af37 : 0xa855f7,
        metalness: 0.6,
        roughness: 0.3,
        emissive: 0x331a00,
        emissiveIntensity: 0.2
      });
      return new THREE.Mesh(tubeGeo, threadMat);
    };
    rakhiGroup.add(createThread(true));
    rakhiGroup.add(createThread(false));

    // 5. 3D Floating Particles Cloud (Golden Stardust & Purple Bokeh)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const goldColor = new THREE.Color(0xffd700);
    const purpleColor = new THREE.Color(0xb388ff);
    const pinkColor = new THREE.Color(0xf472b6);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const pickColor = Math.random() > 0.5 ? goldColor : Math.random() > 0.5 ? purpleColor : pinkColor;
      colors[i * 3] = pickColor.r;
      colors[i * 3 + 1] = pickColor.g;
      colors[i * 3 + 2] = pickColor.b;

      scales[i] = Math.random() * 0.15 + 0.05;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Canvas circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 240, 200, 0.8)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.35,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. 3D Floating Petals Mesh Group
    const petalsGroup = new THREE.Group();
    const petalCount = 14;
    const petalMeshes: Array<{ mesh: THREE.Mesh; speedX: number; speedY: number; speedRot: number }> = [];

    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, 0);
    petalShape.quadraticCurveTo(0.18, 0.25, 0, 0.5);
    petalShape.quadraticCurveTo(-0.18, 0.25, 0, 0);

    const petalMeshGeo = new THREE.ShapeGeometry(petalShape);
    const petalMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8a5c2,
      side: THREE.DoubleSide,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.88
    });

    for (let i = 0; i < petalCount; i++) {
      const pMesh = new THREE.Mesh(petalMeshGeo, petalMaterial);
      pMesh.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6);
      pMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      const pScale = Math.random() * 0.7 + 0.6;
      pMesh.scale.set(pScale, pScale, pScale);
      petalsGroup.add(pMesh);
      petalMeshes.push({
        mesh: pMesh,
        speedX: (Math.random() - 0.5) * 0.008,
        speedY: -(Math.random() * 0.012 + 0.006),
        speedRot: (Math.random() - 0.5) * 0.02
      });
    }
    scene.add(petalsGroup);

    // 7. Render Loop with Smooth Animations
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Camera Glide Animation
      if (elapsedTime < 0.8) {
        // Starts at z: 13, glides smoothly towards z: 8.5
        const progress = Math.min(elapsedTime / 0.8, 1);
        camera.position.z = 13 - (13 - 8.5) * (1 - Math.pow(1 - progress, 3));
      } else if (elapsedTime < 2.0) {
        camera.position.z = 8.5 - 0.2 * Math.sin((elapsedTime - 0.8) * Math.PI * 0.8);
      } else if (elapsedTime > 3.6) {
        // Pull back slightly on outro
        camera.position.z += 0.015;
      }

      // 3D Rakhi Scale & Rotation Animation
      if (elapsedTime >= 0.4 && elapsedTime < 1.3) {
        const t = (elapsedTime - 0.4) / 0.9;
        // Elastic/Spring ease out
        const springScale = Math.sin(t * Math.PI * 0.5) * 1.0;
        rakhiGroup.scale.set(springScale, springScale, springScale);
      } else if (elapsedTime >= 1.3) {
        rakhiGroup.scale.set(1, 1, 1);
      }

      // Smooth Gentle Y-Rotation & Floating Oscillation
      rakhiGroup.rotation.y = Math.sin(elapsedTime * 1.4) * 0.35;
      rakhiGroup.rotation.x = Math.cos(elapsedTime * 1.0) * 0.1;
      rakhiGroup.position.y = 0.9 + Math.sin(elapsedTime * 2.0) * 0.06;

      // Stardust Points Orbit
      particleSystem.rotation.y = elapsedTime * 0.04;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;

      // Petals Floating Animation
      petalMeshes.forEach((p) => {
        p.mesh.position.x += p.speedX;
        p.mesh.position.y += p.speedY;
        p.mesh.rotation.x += p.speedRot;
        p.mesh.rotation.y += p.speedRot * 1.2;

        if (p.mesh.position.y < -5) {
          p.mesh.position.y = 5;
          p.mesh.position.x = (Math.random() - 0.5) * 12;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden transition-all duration-700 ${
        stage === 5
          ? 'bg-[#FAF6F0] opacity-0 scale-105 pointer-events-none'
          : 'bg-gradient-to-b from-[#241126]/95 via-[#1a0c1b]/95 to-[#120713]/95 backdrop-blur-md opacity-100'
      }`}
    >
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-10 pointer-events-none w-full h-full"
      />

      {/* Radiant Soft Center Aura */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 z-0 ${
          stage >= 2
            ? 'w-[480px] h-[480px] sm:w-[640px] sm:h-[640px] bg-radial from-[#9B5DE5]/25 via-[#D4AF37]/25 to-transparent blur-3xl opacity-100'
            : 'w-48 h-48 bg-[#D4AF37]/15 blur-xl opacity-0'
        } ${stage === 5 ? 'scale-150 opacity-0' : ''}`}
      />

      {/* Layered 3D Typography Overlay */}
      <div className="relative z-20 max-w-xl mx-auto flex flex-col items-center justify-center space-y-4 px-4 mt-36 sm:mt-40 pointer-events-none">
        
        {/* Stage 1: "✨ Happy Raksha Bandhan ✨" */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            stage >= 3
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-90 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 text-2xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#FFFDF9] tracking-tight filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.6)]">
            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-[#D4AF37] animate-pulse shrink-0" />
            <span>Happy Raksha Bandhan</span>
            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-[#D4AF37] animate-pulse shrink-0" />
          </div>
        </div>

        {/* Stage 2: "Bangaram 💜" (The Emotional Highlight) */}
        <div
          className={`pt-1 transition-all duration-700 ease-out transform ${
            stage >= 4
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-95'
          }`}
        >
          <h1 className="font-handwritten text-4xl sm:text-6xl md:text-7xl font-bold text-[#F3E8FF] tracking-wide filter drop-shadow-[0_4px_24px_rgba(155,93,229,0.85)] flex items-center justify-center gap-3">
            <span>Bangaram</span>
            <span className="text-3xl sm:text-5xl inline-block animate-bounce [animation-duration:1.5s]">💜</span>
          </h1>
        </div>

        {/* Subtle Progress Indicator */}
        <div
          className={`pt-4 flex items-center justify-center gap-2 text-xs text-[#E2C055]/85 font-sans tracking-widest uppercase transition-opacity duration-500 ${
            stage >= 4 ? 'opacity-85' : 'opacity-0'
          }`}
        >
          <Star className="w-3 h-3 fill-[#D4AF37]" />
          <span>Opening Your Memory Book</span>
          <Star className="w-3 h-3 fill-[#D4AF37]" />
        </div>

      </div>
    </div>
  );
};

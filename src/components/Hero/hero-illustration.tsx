import { useEffect, useRef } from "react";

export default function HeroIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsla(${240 + Math.random() * 60}, 80%, 60%, ${
          Math.random() * 0.5 + 0.3
        })`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Array to store particles
    const particlesArray: Particle[] = [];

    // Create initial particles
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() * canvas.width) / window.devicePixelRatio;
      const y = (Math.random() * canvas.height) / window.devicePixelRatio;
      particlesArray.push(new Particle(x, y));
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new particles occasionally
      if (Math.random() > 0.95) {
        const x = (Math.random() * canvas.width) / window.devicePixelRatio;
        const y = (Math.random() * canvas.height) / window.devicePixelRatio;
        particlesArray.push(new Particle(x, y));
      }

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Remove tiny particles
        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }

      // Draw central "AI brain" visualization
      drawAIVisualization();

      requestAnimationFrame(animate);
    };

    // Draw AI visualization
    const drawAIVisualization = () => {
      if (!ctx) return;

      const centerX = canvas.width / (2 * window.devicePixelRatio);
      const centerY = canvas.height / (2 * window.devicePixelRatio);
      const radius = 80;

      // Draw outer circle
      ctx.strokeStyle = "rgba(124, 58, 237, 0.2)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw inner circle
      ctx.strokeStyle = "rgba(99, 102, 241, 0.3)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.7, 0, Math.PI * 2);
      ctx.stroke();

      // Draw neural network connections
      const nodes = 12;
      const nodePositions = [];

      for (let i = 0; i < nodes; i++) {
        const angle = (i / nodes) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        nodePositions.push({ x, y });

        // Draw node
        ctx.fillStyle = "rgba(124, 58, 237, 0.7)";
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections between nodes
      for (let i = 0; i < nodes; i++) {
        for (let j = i + 1; j < nodes; j++) {
          if (Math.random() > 0.7) continue; // Only draw some connections

          const startNode = nodePositions[i];
          const endNode = nodePositions[j];

          ctx.strokeStyle = `rgba(124, 58, 237, ${Math.random() * 0.2 + 0.1})`;
          ctx.lineWidth = Math.random() * 1.5 + 0.5;
          ctx.beginPath();
          ctx.moveTo(startNode.x, startNode.y);
          ctx.lineTo(endNode.x, endNode.y);
          ctx.stroke();
        }
      }

      // Draw inner connections
      const innerNodes = 6;
      const innerNodePositions = [];

      for (let i = 0; i < innerNodes; i++) {
        const angle = (i / innerNodes) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius * 0.4;
        const y = centerY + Math.sin(angle) * radius * 0.4;
        innerNodePositions.push({ x, y });

        // Draw inner node
        ctx.fillStyle = "rgba(99, 102, 241, 0.8)";
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connect inner nodes to outer nodes
      for (let i = 0; i < innerNodes; i++) {
        for (let j = 0; j < nodes; j++) {
          if (Math.random() > 0.3) continue; // Only draw some connections

          const startNode = innerNodePositions[i];
          const endNode = nodePositions[j];

          ctx.strokeStyle = `rgba(99, 102, 241, ${
            Math.random() * 0.15 + 0.05
          })`;
          ctx.lineWidth = Math.random() * 1 + 0.2;
          ctx.beginPath();
          ctx.moveTo(startNode.x, startNode.y);
          ctx.lineTo(endNode.x, endNode.y);
          ctx.stroke();
        }
      }

      // Draw center node
      ctx.fillStyle = "rgba(79, 70, 229, 0.9)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fill();
    };

    // Start animation
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-gradient-to-br from-violet-600/20 to-indigo-600/20 p-8">
          <div className="rounded-full bg-gradient-to-br from-violet-600/30 to-indigo-600/30 p-6">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-white"
              >
                <path d="M12 2a8 8 0 0 1 8 8v12H4V10a8 8 0 0 1 8-8z" />
                <path d="M12 10a2 2 0 0 0-2 2v8h4v-8a2 2 0 0 0-2-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

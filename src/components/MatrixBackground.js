import React, { useEffect, useState } from 'react';
import './MatrixBackground.css';

function MatrixBackground() {
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';  // Increased opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';  // Increased opacity
      ctx.font = `${fontSize}px Arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    if (!localStorage.getItem('visited')) {
      localStorage.setItem('visited', 'true');
      setShowMatrix(true);
      const interval = setInterval(draw, 33);
      setTimeout(() => {
        setShowMatrix(false);
        clearInterval(interval);
      }, 5000);  // Show the matrix effect for 5 seconds
    }
  }, []);

  return <canvas id="matrix" style={{ display: showMatrix ? 'block' : 'none' }}></canvas>;
}

export default MatrixBackground;

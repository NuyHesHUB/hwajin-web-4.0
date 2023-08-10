import { useEffect, useState } from 'react';

const useGradientBackground = () => {
  const colors = [
    [62, 35, 255],
    [125, 93, 181],
    [30, 102, 187],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]
  ];

  const [step, setStep] = useState(0);
  const [colorIndices, setColorIndices] = useState([0, 1, 2, 3]);
  const gradientSpeed = 0.002;

  const updateGradient = () => {
    let c0_0 = colors[colorIndices[0]];
    let c0_1 = colors[colorIndices[1]];
    let c1_0 = colors[colorIndices[2]];
    let c1_1 = colors[colorIndices[3]];

    let istep = 1 - step;
    let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    let color1 = `rgb(${r1},${g1},${b1})`;

    let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    let color2 = `rgb(${r2},${g2},${b2})`;

    document.body.style.background = `-webkit-gradient(linear, left top, right top, from(${color1}), to(${color2}))`;
    document.body.style.background = `-moz-linear-gradient(left, ${color1} 0%, ${color2} 100%)`;

    setStep(prevStep => (prevStep + gradientSpeed) % 1);

    const newColorIndices = [...colorIndices];
    newColorIndices[0] = newColorIndices[1];
    newColorIndices[2] = newColorIndices[3];
    newColorIndices[1] = (newColorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    newColorIndices[3] = (newColorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    setColorIndices(newColorIndices);
  };

  useEffect(() => {
    const interval = setInterval(updateGradient, 10);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default useGradientBackground;

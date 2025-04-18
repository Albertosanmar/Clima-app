import { useEffect } from 'react';

const Background = ({ description }) => {
  useEffect(() => {
    if (!description) return;

    
    const backgrounds = {
        'cielo claro': '/backgrounds/soleado.jpg',
        'pocas nubes': '/backgrounds/sol-nubes.jpg',
        'nubes dispersas': '/backgrounds/nubes-dispersas.jpg',
        'nubes rotas': '/backgrounds/nubes-rotas.jpg',
        'lluvia moderada': '/backgrounds/lluvia.jpg',
        'lluvia ligera': '/backgrounds/lluvia.jpg',
        'lluvia': '/backgrounds/lluvia.jpg',
        'tormenta': '/backgrounds/tormenta.jpg',
        'nieve': '/backgrounds/nevado.jpg',
        'niebla': '/backgrounds/niebla.jpg',
        'default': '/backgrounds/default.jpg', 
    };

      const lowerDesc = description.toLowerCase();
      const imageName = backgrounds[lowerDesc] || backgrounds['default'];

      document.body.style.setProperty('--bg-image', `url(${imageName})`);
  }, [description]);

  return null;
};

export default Background;



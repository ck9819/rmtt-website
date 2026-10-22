import { useState } from 'react';
import { Expand } from 'lucide-react';
import Lightbox from './Lightbox';
import styles from './ZoomImage.module.css';

export default function ZoomImage({ src, alt, width = 800, height = 600, eager = false }: { src: string; alt: string; width?: number; height?: number; eager?: boolean }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className={styles.image} onClick={() => setOpen(true)} aria-label={`Open larger view of ${alt}`} title={`View ${alt}`}>
      <img src={src} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} decoding="async" draggable={false} />
      <span className={styles.control}><Expand size={18} aria-hidden="true" />View larger</span>
    </button>
    {open && <Lightbox images={[{ src, alt }]} index={0} onIndex={() => {}} onClose={() => setOpen(false)} />}
  </>;
}
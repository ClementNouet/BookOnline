import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100%' }}
        transition={{
          opacity: { duration: 0.5, ease: 'easeIn' }, // Ajout de "easeIn" pour l'opacité
          x: { type: 'spring', stiffness: 200, damping: 30, duration: 0.5, ease: 'easeIn' }, // Ajout de "easeIn" pour le glissement
        }}
        style={{ position: 'relative', minHeight: '100vh' }} // Assurez-vous que l'élément occupe toute la hauteur
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;

import { motion } from 'motion/react';

export const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0f172a_0%,#020617_100%)]" />

      {/* Organic Star Field */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: `
               radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
               radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
               radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
               radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
               radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
               radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))
             `,
             backgroundSize: '200px 200px'
           }} />
      
      {/* Depth Layers - Large Soft Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/20 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-900/10 blur-[120px] rounded-full" 
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
    </div>
  );
};

"use client";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  message?: string;
  variant?: 'default' | 'minimal' | 'dots' | 'pulse';
}

const LoadingScreen = ({ message = "Loading...", variant = 'default' }: LoadingScreenProps) => {
  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center py-12">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Floating Orbs */}
          <div className="relative w-16 h-16">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          <motion.p
            className="text-sm text-gray-600 mt-4 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {message}
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center py-8">
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className="flex items-center justify-center py-8">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-indigo-300"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    );
  }

  // Default variant - WOW factor
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center overflow-hidden">
      <div className="text-center relative">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 -z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-indigo-200/30 to-purple-200/30 blur-xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        {/* Main Loading Animation */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Morphing Logo */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              animate={{
                borderRadius: ["50%", "30%", "50%"],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-3 bg-white rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 0.9, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                CB
              </motion.span>
            </motion.div>
          </div>

          {/* Particle System */}
          <div className="relative h-16 mb-6">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%'
                }}
                animate={{
                  x: [0, Math.cos(i * 45 * Math.PI / 180) * 40],
                  y: [0, Math.sin(i * 45 * Math.PI / 180) * 40],
                  opacity: [1, 0.3, 1],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Loading Text */}
          <motion.p
            className="text-xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {message}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
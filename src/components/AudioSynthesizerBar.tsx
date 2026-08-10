import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Radio, Sparkles } from 'lucide-react';

export const AudioSynthesizerBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Simple Web Audio API Synthesizer simulating lounge rhythm beat
  const startSynth = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      let step = 0;
      intervalRef.current = window.setInterval(() => {
        if (!audioCtxRef.current) return;
        const now = audioCtxRef.current.currentTime;

        // Kick drum on 0 and 2
        if (step % 2 === 0) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(120, now);
          osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.2);
          gain.gain.setValueAtTime(0.3, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.2);
        }

        // Hihat on every step
        const hat = ctx.createOscillator();
        const hatGain = ctx.createGain();
        hat.type = 'square';
        hat.frequency.setValueAtTime(2000 + Math.random() * 500, now);
        hatGain.gain.setValueAtTime(0.04, now);
        hatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        hat.connect(hatGain);
        hatGain.connect(ctx.destination);
        hat.start(now);
        hat.stop(now + 0.05);

        // Soft lounge synth note on step 0 and 3
        if (step === 0 || step === 3) {
          const synth = ctx.createOscillator();
          const synthGain = ctx.createGain();
          synth.type = 'triangle';
          const notes = [220, 261.63, 329.63, 392]; // A, C, E, G
          const freq = notes[Math.floor(Math.random() * notes.length)];
          synth.frequency.setValueAtTime(freq, now);
          synthGain.gain.setValueAtTime(0.08, now);
          synthGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
          synth.connect(synthGain);
          synthGain.connect(ctx.destination);
          synth.start(now);
          synth.stop(now + 0.4);
        }

        step = (step + 1) % 4;
      }, 350); // ~170 BPM chill lounge tempo

      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio synth failed:', e);
    }
  };

  const stopSynth = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSynth();
    } else {
      startSynth();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={toggleSound}
        className={`px-3.5 py-2.5 rounded-full border shadow-xl flex items-center space-x-2 transition-all cursor-pointer ${
          isPlaying
            ? 'bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 border-pink-400 text-white shadow-pink-500/30 animate-pulse'
            : 'glass-panel border-zinc-700 text-zinc-300 hover:text-cyan-400 hover:border-cyan-400'
        }`}
        title="Toggle Stage Ambient Beat Simulator"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-cyan-300 animate-spin" />
            <span className="text-xs font-mono font-bold">STAGE BEATS ON</span>
            {/* Animated Equalizer Wave */}
            <div className="flex items-end space-x-0.5 h-3">
              <span className="w-0.5 bg-cyan-300 rounded-full h-full animate-bounce"></span>
              <span className="w-0.5 bg-pink-300 rounded-full h-2/3 animate-bounce delay-100"></span>
              <span className="w-0.5 bg-purple-300 rounded-full h-full animate-bounce delay-200"></span>
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-mono font-bold hidden sm:inline">STAGE SOUND</span>
          </>
        )}
      </button>
    </div>
  );
};

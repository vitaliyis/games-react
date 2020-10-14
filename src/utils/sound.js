const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export function beep(frequency, type, volume, duration) {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = frequency;
  oscillator.type = type;

  oscillator.start();

  setTimeout(
    function(){
      oscillator.stop();
    },
    duration
  );
};
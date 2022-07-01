export const getTrack = (track: MediaStreamTrack) => {
  const stream = new MediaStream();
  stream.addTrack(track);
  return stream;
};

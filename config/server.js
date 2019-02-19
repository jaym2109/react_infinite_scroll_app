module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "abef5ce22885dd3789f2588a5edb361240a459daaddc42a87e3c602e8b85710e",
  SECRET:
    process.env.SECRET ||
    "1ee7854056eff51c0c79eba4bbfa05151ec458324eac9f689da97e51b908acfc",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};

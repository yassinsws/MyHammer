
// Mock implementation - GoogleGenAI imports removed



export const chatWithGemini = async (messages: { role: string; parts: { text: string }[] }[]): Promise<string> => {
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const lastMessage = messages[messages.length - 1]?.parts[0]?.text.toLowerCase() || "";

  if (lastMessage.includes("plumber") || lastMessage.includes("leak")) {
    return "It sounds like you have a plumbing issue. For leaks, I recommend shutting off your main water valve and hiring a professional plumber immediately. On HammerMatch, you can find certified plumbers in your area.";
  }

  if (lastMessage.includes("price") || lastMessage.includes("cost")) {
    return "Project costs vary based on scope and materials. HammerMatch lets you receive multiple quotes from craftsmen so you can compare prices and choose the best fit for your budget.";
  }

  return "I'm HammerBot! I'm currently running in demo mode. I can help you find craftsmen, give DIY advice, or explain how HammerMatch works. How can I assist you today?";
};

export const analyzeJobImage = async (base64Image: string, mimeType: string): Promise<string> => {
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  return "AI Analysis (Demo): This image appears to show a household repair task. Based on typical patterns, a specialized craftsman like a plumber or electrician may be required. We recommend posting this job on HammerMatch to get expert evaluations from local professionals.";
};



// The Gemini logic, including API key management, has been moved to the main Electron process for better security.
// This service now acts as a clean, simple wrapper for the IPC call exposed via the preload script.

export const askAboutProject = async (question: string): Promise<string> => {
  // Use the secure API exposed on the window object by the preload script
  return window.electronAPI.askAboutProject(question);
};

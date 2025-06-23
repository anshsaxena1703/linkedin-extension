export const useChromeStorage = () => {
    return {
        setInfo: async (resumeLink, emailTemplate) => {
            chrome.storage.local.set({ resumeLink: resumeLink });
            chrome.storage.local.set({ emailTemplate: emailTemplate });
        },

        getInfo: async () => {
            const resumeLink = await chrome.storage.local.get(resumeLink);
            const emailTemplate = await chrome.storage.local.get(emailTemplate);
            return {
                resumeLink: resumeLink.resumeLink || '',
                emailTemplate: emailTemplate.emailTemplate || ''
            };
        }
    }
}
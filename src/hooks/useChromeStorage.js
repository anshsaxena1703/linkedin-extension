export const useChromeStorage = () => {
    return {
        setInfo: async (resumeLink, emailTemplate) => {
            chrome.storage.local.set({ resumeLink: resumeLink });
            chrome.storage.local.set({ emailTemplate: emailTemplate });
        },

        getInfo: async () => {
            const resumeLinkObj = await chrome.storage.local.get('resumeLink');
            const emailTemplateObj = await chrome.storage.local.get('emailTemplate');
            return {
                resumeLink: resumeLinkObj.resumeLink || '',
                emailTemplate: emailTemplateObj.emailTemplate || ''
            };
        }
    }
}
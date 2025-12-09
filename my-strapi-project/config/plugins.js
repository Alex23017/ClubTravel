console.log('EMAIL PLUGIN LOADED!');
module.exports = {
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: process.env.RESEND_API_KEY,
      },
      settings: {
        defaultFrom: 'onboarding@resend.dev',
        defaultReplyTo: 'onboarding@resend.dev',
      },
    },
  },
};

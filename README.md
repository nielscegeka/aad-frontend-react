Azure Animal Directory - Technical Meetup 27/11/2025

Deze applicatie is gemaakt om onze creatie te laten zien aan de buitenwereld. Dit zorgt ervoor dat je kan aanmelden via Entra ID (Cegeka account is voldoende) en gebruik kunt maken van onze dieren wiki. Deze applicatie roept achterliggend een Spring Boot API aan die achterliggend
de zoekopdrachten gaat voltooien met AI maar de rest is een mysterie.

De call bijvoorbeeld voor het ophalen van een image: <br>
Input: url?animal=xxx <br>
Output: "data": [{ "image": "data:image/png;base64," + base64 }]

Dit was het snelste om op te zetten binnen azure met een beperkt stappenplan: <br>
1. Maak binnen Azure een Static Web App aan, kies deployment via token.
2. Vul de .env parameters aan.
3. npm i && npm run build (Dit gaat een ./dist folder aanmaken met alles in wat je nodig hebt.)
4. npm i -g @azure/static-web-apps-cli (Eenmalige installatie nodig door de -g parameter, anders moet je -D doen voor enkel dit project)
5. swa deploy ./dist --app-name 'static-web-app-name' --env production --deployment-token 'token'

Binnen de Static Web App vindt je de URL van je nieuw gebouwde app en normaal zit daar nu ook je nieuwe frontend. Let op dat alles van npm run build in de ./dist folder belandt omdat dit een React applicatie is die onderliggend Vite gebruikt voor dependency management. De folder zal niet altijd dezelfde zijn!

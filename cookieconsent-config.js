import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true,
            enabled: true
        },
        analytics: {
            enabled: false, // Analyse-Cookies sind standardmäßig deaktiviert
            services: {
                umami: {
                    label: "Umami Analytics",
                    onAccept: () => {
                        // Dynamisch das Umami-Skript laden, wenn der Nutzer zustimmt
                        const script = document.createElement('script');
                        script.defer = true;
                        script.src = "https://cloud.umami.is/script.js";
                        script.dataset.websiteId = "c9dda668-0824-4ae0-9716-d82a0bc851ad";
                        document.head.appendChild(script);
                    },
                    onReject: () => {
                        // Nichts tun, wenn der Nutzer ablehnt
                    }
                }
            }
        }
    },
    language: {
        default: "de",
        autoDetect: "browser",
        translations: {
            de: {
                consentModal: {
                    title: "Cookie-Einwilligung",
                    description: "Wir verwenden technisch notwendige Cookies, um die Funktionalität unserer Website zu gewährleisten. Zusätzlich möchten wir Analyse-Cookies einsetzen, um das Nutzerverhalten zu analysieren und unsere Website zu verbessern. Diese Cookies werden nur mit Ihrer Zustimmung gesetzt. Weitere Informationen finden Sie in unserer <a class=\"cc__link\" href=\"/datenschutz\">Datenschutzerklärung</a>.",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Nur notwendige Cookies",
                    showPreferencesBtn: "Einstellungen anpassen",
                    footer: "<a href=\"/datenschutz\">Datenschutzerklärung</a>"
                },
                preferencesModal: {
                    title: "Cookie-Einstellungen",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Nur notwendige Cookies",
                    savePreferencesBtn: "Einstellungen speichern",
                    closeIconLabel: "Schließen",
                    serviceCounterLabel: "Dienste",
                    sections: [
                        {
                            title: "Unsere Verwendung von Cookies",
                            description: "Wir nutzen Cookies, um die grundlegende Funktionalität der Website zu gewährleisten und anonymisierte Analysen des Nutzerverhaltens durchzuführen. Sie können Ihre Präferenzen hier anpassen."
                        },
                        {
                            title: "Technisch notwendige Cookies <span class=\"pm__badge\">Immer aktiv</span>",
                            description: "Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich und können nicht deaktiviert werden. Sie speichern keine personenbezogenen Daten.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analyse-Cookies",
                            description: "Diese Cookies ermöglichen es uns, anonymisierte Daten über die Nutzung unserer Website zu sammeln, um deren Leistung und Benutzerfreundlichkeit zu verbessern. Wir verwenden Umami Analytics, um diese Daten zu erfassen, ohne sie mit anderen Diensten zu verknüpfen.",
                            linkedCategory: "analytics",
                            toggle: {
                                value: "analytics",
                                enabled: false,
                                readonly: false
                            }
                        },
                        {
                            title: "Weitere Informationen",
                            description: "Für Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns bitte unter <a class=\"cc__link\" href=\"/kontakt\">Kontakt</a> oder lesen Sie unsere <a class=\"cc__link\" href=\"/datenschutz\">Datenschutzerklärung</a>."
                        }
                    ]
                }
            },
            en: {
                consentModal: {
                    title: "Cookie Consent",
                    description: "We use strictly necessary cookies to ensure the functionality of our website. Additionally, we would like to use analytics cookies to analyze user behavior and improve our website. These cookies will only be set with your consent. For more information, see our <a class=\"cc__link\" href=\"/privacy\">Privacy Policy</a>.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Only necessary cookies",
                    showPreferencesBtn: "Customize settings",
                    footer: "<a href=\"/privacy\">Privacy Policy</a>"
                },
                preferencesModal: {
                    title: "Cookie Settings",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Only necessary cookies",
                    savePreferencesBtn: "Save settings",
                    closeIconLabel: "Close",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Our Use of Cookies",
                            description: "We use cookies to ensure the basic functionality of the website and to perform anonymized analysis of user behavior. You can adjust your preferences here."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always active</span>",
                            description: "These cookies are essential for the website’s basic functionality and cannot be disabled. They do not store personal data.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "These cookies allow us to collect anonymized data about the use of our website to improve its performance and user experience. We use Umami Analytics to collect this data, without linking it to other services.",
                            linkedCategory: "analytics",
                            toggle: {
                                value: "analytics",
                                enabled: false,
                                readonly: false
                            }
                        },
                        {
                            title: "More Information",
                            description: "For questions about our cookie policy, please contact us at <a class=\"cc__link\" href=\"/contact\">Contact</a> or read our <a class=\"cc__link\" href=\"/privacy\">Privacy Policy</a>."
                        }
                    ]
                }
            }
        }
    }
});

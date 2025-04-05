import type { Translation } from '../i18n-types';

const sv: Translation = {
  LANGUAGE: 'Språk',
  RETRY: 'Försök igen',
  LOADING: 'Laddar',
  IS_REQUIRED: '{0} Krävs',
  SIGN_IN: 'Logga in',
  SIGN_OUT: 'Logga ut',
  USERNAME: 'Användarnamn',
  PASSWORD: 'Lösenord',
  SU_PASSWORD: 'su Lösenord',
  SETTINGS_OF: '{0} Inställningar',
  HELP: 'Hjälp',
  LOGGED_IN: 'Inloggad som {name}',
  PLEASE_SIGNIN: 'Vänligen logga in för att fortsätta',
  UPLOAD_SUCCESSFUL: 'Uppladdning lyckades',
  DOWNLOAD_SUCCESSFUL: 'Nedladdning lyckades',
  INVALID_LOGIN: 'Ogiltig login',
  NETWORK: 'Nätverk',
  SECURITY: 'Säkerhet',
  ONOFF_CAP: 'PÅ/AV',
  ONOFF: 'på/av',
  TYPE: 'Typ',
  DESCRIPTION: 'Beskrivning',
  ENTITIES: 'entiteter',
  REFRESH: 'Uppdatera',
  EXPORT: 'Exportera',
  FAVORITES: "Favoriter",
  DEVICE_DETAILS: 'Enhetsdetaljer',
  ID_OF: '{0}-ID',
  DEVICE: 'Enhet',
  PRODUCT: 'Produkt',
  VERSION: 'Version',
  BRAND: 'Fabrikat',
  ENTITY_NAME: 'Entitetsnamn',
  VALUE: '{{värde|Värde}}',
  DEVICES: 'Enheter',
  SENSORS: 'Sensorer',
  RUN_COMMAND: 'Kör kommando',
  CHANGE_VALUE: 'Ändra värde',
  CANCEL: 'Avbryt',
  RESET: 'Nollställ',
  APPLY_CHANGES: 'Utför ändringar ({0})',
  UPDATE: 'Uppdatera',
  EXECUTE: 'Utför',
  REMOVE: 'Ta bort',
  PROBLEM_UPDATING: 'Problem vid uppdatering',
  PROBLEM_LOADING: 'Problem vid hämtning',
  ANALOG_SENSOR: 'analog sensor',
  ANALOG_SENSORS: 'Analoga sensorer',
  SETTINGS: 'Inställningar',
  UPDATED_OF: '{0} Uppdaterad',
  UPDATE_OF: '{0} Uppdatera',
  REMOVED_OF: '{0} Raderad',
  DELETION_OF: '{0} Radering',
  OFFSET: 'Offset',
  FACTOR: 'Faktor',
  FREQ: 'Frekvens',
  DUTY_CYCLE: 'Pulskvot',
  UNIT: 'Måttenhet',
  STARTVALUE: 'Startvärde',
  WARN_GPIO: 'Varning: Var försiktig vid aktivering av GPIO!',
  EDIT: 'Ändra',
  SENSOR: 'Sensor',
  TEMP_SENSOR: 'Temperatursensor',
  TEMP_SENSORS: 'Temperatursensorer',
  WRITE_CMD_SENT: 'Skrivkommandon skickade',
  EMS_BUS_WARNING: 'EMS-buss nedkopplad. Om denna varning kvarstår efter några sekunder, kontrollera inställningar och enhets-profil.',
  EMS_BUS_SCANNING: 'Söker efter EMS-enheter...',
  CONNECTED: 'Ansluten',
  TX_ISSUES: 'Sändfel - Prova ett annat TX-läge',
  DISCONNECTED: 'Nedkopplad',
  EMS_SCAN: 'Är du säker på att du vill starta en full genomsökning av EMS-bussen?',
  DATA_TRAFFIC: 'Datatrafik',
  EMS_DEVICE: 'EMS enhet',
  SUCCESS: 'Lyckades',
  FAIL: 'Misslyckades',
  QUALITY: 'Kvalitet',
  SCAN: 'Sök',
  STATUS_NAMES: [
    'EMS-telegram (Rx)',
    'EMS-läsningar (Tx)',
    'EMS-skrivningar (Tx)',
    'Temperatursensor-läsningar',
    'Analog Sensor-läsningar',
    'MQTT-publiceringar',
    'API-anrop',
    'Syslog-meddelanden'
  ],
  NUM_DAYS: '{num} dag{{ar}}',
  NUM_SECONDS: '{num} sekund{{er}}',
  NUM_HOURS: '{num} timmar',
  NUM_MINUTES: '{num} minut{{er}}',
  APPLICATION: 'Applikation',
  CUSTOMIZATIONS: 'Anpassningar',
  APPLICATION_RESTARTING: 'EMS-ESP startar om',
  BOARD_PROFILE: 'Hårdvarutyp',
  CUSTOM: 'Anpassa',
  GPIO_OF: '{0} GPIO',
  BUTTON: 'Knapp',
  TEMPERATURE: 'Temperatur',
  PHY_TYPE: 'Eth PHY-typ',
  DISABLED: 'inaktiverad',
  TX_MODE: 'EMS Tx-läge',
  HARDWARE: 'Hårdvara',
  EMS_BUS: '{{BUSS|EMS-BUSS}}',
  GENERAL_OPTIONS: 'Allmänna inställningar',
  LANGUAGE_ENTITIES: 'Språk (för entiteter)',
  HIDE_LED: 'Inaktivera LED',
  ENABLE_TELNET: 'Aktivera Telnet',
  ENABLE_ANALOG: 'Aktivera Analoga Sensorer',
  CONVERT_FAHRENHEIT: 'Konvertera temperaturer till Fahrenheit',
  BYPASS_TOKEN: 'Inaktivera Token-autentisiering för API-anrop',
  READONLY: 'Aktivera skrivskydd (blockerar alla utgående skrivkommandon mot EMS-bussen)',
  UNDERCLOCK_CPU: 'Nedklocka Processorhastighet',
  REMOTE_TIMEOUT: 'Remote timeout',
  REMOTE_TIMEOUT_EN: 'Deaktivera remote vid missad rumstemperatur',
  HEATINGOFF: 'Starta värmepump/panna med forcerad värme avstängd',
  MIN_DURATION: 'Väntetid',
  ENABLE_SHOWER_TIMER: 'Aktivera Dusch-timer',
  ENABLE_SHOWER_ALERT: 'Aktivera Dusch-varning',
  TRIGGER_TIME: 'Aktiveringstid',
  COLD_SHOT_DURATION: 'Längd på kalldusch',
  FORMATTING_OPTIONS: 'Formateringsalternativ',
  BOOLEAN_FORMAT_DASHBOARD: 'Bool-format Kontrollpanel',
  BOOLEAN_FORMAT_API: 'Bool-format API/MQTT',
  ENUM_FORMAT: 'Enum-format API/MQTT',
  INDEX: 'Index',
  ENABLE_PARASITE: 'Aktivera 1-wire parasitström',
  LOGGING: 'Loggning',
  LOG_HEX: 'Logga EMS-telegram i hexadecimalformat',
  ENABLE_SYSLOG: 'Aktivera Syslog',
  LOG_LEVEL: 'Loggnivå',
  MARK_INTERVAL: 'Markeringsintervall',
  SECONDS: 'sekunder',
  MINUTES: 'minuter',
  HOURS: 'timmar',
  RESTART: 'Starta om',
  RESTART_TEXT: 'EMS-ESP kräver en omstart för att applicera förändrade systeminställningar',
  RESTART_CONFIRM: 'Är du säker på att du vill starta om EMS-ESP?',
  COMMAND: 'Kommando',
  CUSTOMIZATIONS_RESTART: 'Alla anpassningar har raderats. Startar om...',
  CUSTOMIZATIONS_FULL: 'För många valda enheter. Vänligen spara ett mindre antal åt gången.',
  CUSTOMIZATIONS_SAVED: 'Anpassningarna är sparade',
  CUSTOMIZATIONS_HELP_1: 'Välj en enhet och anpassa entiteter med hjälp av alternativen',
  CUSTOMIZATIONS_HELP_2: 'Favorit',
  CUSTOMIZATIONS_HELP_3: 'Skrivskyddad',
  CUSTOMIZATIONS_HELP_4: 'Exkludera från MQTT & API',
  CUSTOMIZATIONS_HELP_5: 'Dölj under Enheter',
  CUSTOMIZATIONS_HELP_6: 'Ta bort',
  SELECT_DEVICE: 'Välj en enhet',
  SET_ALL: 'ställ in alla',
  OPTIONS: 'Alternativ',
  NAME: 'Namn',
  CUSTOMIZATIONS_RESET: 'Är du säker på att du vill ta bort alla anpassningar, inklusive inställningar för Temperatursensorer och Analoga sensorer?',
  SUPPORT_INFORMATION: 'Supportinformation',
  HELP_INFORMATION_1: 'Besök Wikin för instruktioner om hur du kan konfigurera EMS-ESP',
  HELP_INFORMATION_2: 'För community-support besök vår Discord-server',
  HELP_INFORMATION_3: 'Önska en ny funktion eller rapportera en bugg',
  HELP_INFORMATION_4: 'Bifoga din supportinformation för snabbare hantering när du rapporterar ett problem',
  UPLOAD: 'Uppladdning',
  DOWNLOAD: '{{N|n|n}}edladdning',
  INSTALL: 'Installera',
  ABORTED: 'Avbruten',
  FAILED: 'Misslyckades',
  SUCCESSFUL: 'Lyckades',
  SYSTEM: 'System',
  LOG_OF: '{0} Logg',
  STATUS_OF: '{0} Status',
  DOWNLOAD_UPLOAD: 'Nedladdning/Uppladdning',
  CLOSE: 'Stäng',
  USE: 'Använd',
  FACTORY_RESET: 'Fabriksåterställning',
  SYSTEM_FACTORY_TEXT: 'Enheten har blivit fabriksåterställd och startar nu om',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Är du säker på att du vill fabriksåterställa enheten?',
  AVAILABLE_VERSION: 'Senaste tillgängliga versioner',
  STABLE: 'Stabil',
  DEVELOPMENT: 'Utveckling',
  UPTIME: 'Systemets upptid',
  FREE_MEMORY: 'Ledigt minne',
  PSRAM: 'PSRAM (Storlek / Ledigt)',
  FLASH: 'Flashminne (Storlek , Hastighet)',
  APPSIZE: 'Applikationer (Partition: Använt / Ledigt)',
  FILESYSTEM: 'Filsystem (Använt / Ledigt)',
  BUFFER_SIZE: 'Max bufferstorlek',
  COMPACT: 'Komprimerad',
  DOWNLOAD_SETTINGS_TEXT: 'Skapa en säkerhetskopia av din konfiguration och inställningar',
  UPLOAD_TEXT: 'Ladda upp en ny firmwarefil (.bin) eller en säkerhetskopiafil (.json)',
  UPLOAD_DROP_TEXT: 'Drop a firmware .bin file or click here', // TODO translate
  ERROR: 'Okänt fel, var god försök igen',
  TIME_SET: 'Ställ in tid',
  MANAGE_USERS: 'Användare',
  IS_ADMIN: 'Administratör',
  USER_WARNING: 'Du måste ha minst en administratör konfigurerad',
  ADD: 'Lägg till',
  ACCESS_TOKEN_FOR: 'Access Token för',
  ACCESS_TOKEN_TEXT: 'Nedan Token används med REST API-anrop som kräver auktorisering. Den kan skickas med antingen som en Bearer token i Authorization-headern eller i access_token URL query-parametern.',
  GENERATING_TOKEN: 'Genererar token',
  USER: 'Användare',
  MODIFY: 'Ändra',
  SU_TEXT: 'SU-användarens (super user) lösenord används för att signera autentisierings-tokens samt för att aktivera administratörsprivilegier i Console-läge',
  NOT_ENABLED: 'Ej aktiv',
  ERRORS_OF: '{0} fel',
  DISCONNECT_REASON: 'Anledning till nedkoppling',
  ENABLE_MQTT: 'Aktivera MQTT',
  BROKER: 'Broker',
  CLIENT: 'Klient',
  BASE_TOPIC: 'Bas-topic',
  OPTIONAL: 'valfritt',
  FORMATTING: 'Formatering',
  MQTT_FORMAT: 'Topic/Payload format',
  MQTT_NEST_1: 'Nästlat i en topic.',
  MQTT_NEST_2: 'Som individuella topics',
  MQTT_RESPONSE: 'Publish-kommando som ett `response` topic',
  MQTT_PUBLISH_TEXT_1: 'Publicera single value topics vid värdeförändring',
  MQTT_PUBLISH_TEXT_2: 'Publicera till kommando-topics (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Aktivera MQTT Discovery',
  MQTT_PUBLISH_TEXT_4: 'Prefix för Discovery topics',
  MQTT_PUBLISH_TEXT_5: 'Discoverytyp',
  MQTT_PUBLISH_INTERVALS: 'Publiceringsintervall',
  MQTT_INT_BOILER: 'Värmepump/panna',
  MQTT_INT_THERMOSTATS: 'Termostater',
  MQTT_INT_SOLAR: 'Solpaneler',
  MQTT_INT_MIXER: 'Blandningsventiler',
  MQTT_INT_WATER: 'Varmvattenmoduler',
  MQTT_QUEUE: 'MQTT-kö',
  DEFAULT: 'Standard',
  MQTT_ENTITY_FORMAT: 'Entitets-ID format',
  MQTT_ENTITY_FORMAT_0: 'Singel-instans, långt namn(v3.4)',
  MQTT_ENTITY_FORMAT_1: 'Singel-instans, kort namn',
  MQTT_ENTITY_FORMAT_2: 'Multi-instans, kort namn',
  MQTT_CLEAN_SESSION: 'Använd "Clean Session"-flaggan',
  MQTT_RETAIN_FLAG: 'Använd "Always Retain"-flaggan',
  INACTIVE: 'Inaktiv',
  ACTIVE: 'Aktiv',
  UNKNOWN: 'Okänt',
  SET_TIME: 'Ställ in klockan',
  SET_TIME_TEXT: 'Ange lokalt datum och tid nedan för att ställa in klockan',
  LOCAL_TIME: 'Tid (lokal)',
  UTC_TIME: 'Tid (UTC)',
  ENABLE_NTP: 'Aktivera NTP',
  NTP_SERVER: 'NTP-server',
  TIME_ZONE: 'Tidszon',
  ACCESS_POINT: 'Accesspunkt',
  AP_PROVIDE: 'Aktivera accesspunkt',
  AP_PROVIDE_TEXT_1: 'alltid',
  AP_PROVIDE_TEXT_2: 'när WiFi är nedkopplat',
  AP_PROVIDE_TEXT_3: 'aldrig',
  AP_PREFERRED_CHANNEL: 'Kanal',
  AP_HIDE_SSID: 'Göm SSID',
  AP_CLIENTS: 'AP-klienter',
  AP_MAX_CLIENTS: 'Max antal klienter',
  AP_LOCAL_IP: 'Lokal IP-adress',
  NETWORK_SCAN: 'Sök efter WiFi-nätverk',
  IDLE: 'Vilande',
  LOST: 'Förlorad',
  SCANNING: 'Söker',
  SCAN_AGAIN: 'Sök igen',
  NETWORK_SCANNER: 'Hittade nätverk',
  NETWORK_NO_WIFI: 'Inga WiFi-nätverk hittades',
  NETWORK_BLANK_SSID: 'lämna blankt för att inaktivera WiFi',
  NETWORK_BLANK_BSSID: 'lämna blankt för att bara använda SSID',
  TX_POWER: 'Tx effekt',
  HOSTNAME: 'Värdnamn',
  NETWORK_DISABLE_SLEEP: 'Inaktivera sovläge',
  NETWORK_LOW_BAND: 'Använd lägre bandbredd',
  NETWORK_USE_DNS: 'Aktivera mDNS-tjänsten',
  NETWORK_ENABLE_CORS: 'Aktivera CORS',
  NETWORK_CORS_ORIGIN: 'CORS origin',
  NETWORK_FIXED_IP: 'Använd statisk IP-adress',
  NETWORK_GATEWAY: 'Gateway',
  NETWORK_SUBNET: 'Subnätmask',
  NETWORK_DNS: 'DNS-Server',
  ADDRESS_OF: '{0} Adress',
  ADMINISTRATOR: 'Administratör',
  GUEST: 'Gäst',
  NEW: 'ny',
  NEW_NAME_OF: 'Byt namn {0}',
  ENTITY: 'Entitet',
  MIN: 'min',
  MAX: 'max',
  BLOCK_NAVIGATE_1: 'Du har osparade ändringar',
  BLOCK_NAVIGATE_2: 'Om du navigerar till en annan sida, kommer dina osparade ändringar förloras. Är du säker på att du vill lämna den här sidan?',
  STAY: 'Stanna',
  LEAVE: 'Lämna',
  SCHEDULER: 'Schemaläggning',
  SCHEDULER_HELP_1: 'Automatisera kommandon genom att lägga till schemahändelser nedan. Ange ett unikt namn för att aktivera/avaktivera aktivering via API/MQTT',
  SCHEDULER_HELP_2: 'Använd 00:00 för att trigga en gång vid uppstart',
  SCHEDULE: 'schema',
  TIME: 'Tid',
  TIMER: 'Timer',
  ONCHANGE: 'Vid förändring',
  CONDITION: 'Villkor',
  IMMEDIATE: 'Omedelbar',
  SCHEDULE_UPDATED: 'Schema uppdaterat',
  SCHEDULE_TIMER_1: 'vid uppstart',
  SCHEDULE_TIMER_2: 'varje minut',
  SCHEDULE_TIMER_3: 'varje timme',
  CUSTOM_ENTITIES: 'Anpassade entiteter',
  ENTITIES_HELP_1: 'Hämta anpassade entiteter från EMS bussen',
  ENTITIES_UPDATED: 'Entiteter uppdaterade',
  WRITEABLE: 'Skrivbara',
  SHOWING: 'Visar',
  SEARCH: 'Sök',
  CERT: 'TLS rotcertifikat (lämna blankt för ingen säkerhet)',
  ENABLE_TLS: 'Aktivera TLS',
  ON: 'På',
  OFF: 'Av',
  POLARITY: 'Polaritet',
  ACTIVEHIGH: 'Aktivt hög',
  ACTIVELOW: 'Aktivt låg',
  UNCHANGED: 'Oändrad',
  ALWAYS: 'Alltid',
  ACTIVITY: 'Aktivitet',
  CONFIGURE: 'Konfigurera {0}',
  SYSTEM_MEMORY: 'Systemminne',
  APPLICATION_SETTINGS_1: 'Ändra EMS-ESP Applikationsinställningar',
  SECURITY_1: 'Lägg till eller ta bort användare',
  DOWNLOAD_UPLOAD_1: 'Ladda ner eller ladda upp inställningar och firmware',
  MODULES: 'Moduler',
  MODULES_1: 'Aktivera eller avaktivera externa moduler',
  MODULES_UPDATED: 'Moduler updaterade',
  MODULES_DESCRIPTION: 'Klicka på modulen för att aktivera eller deaktivera EMS-ESP moduler',
  MODULES_NONE: 'Inga externa moduler upptäckta',
  RENAME: 'Byt namn',
  ENABLE_MODBUS: 'Aktivera Modbus',
  VIEW_LOG: 'Titta i loggen för att felsöka problem',
  UPLOAD_DRAG: 'dra och släpp en fil här eller klicka för att välja en',
  SERVICES: 'Tjänster',
  ALLVALUES: 'Alla värden',
  SPECIAL_FUNCTIONS: 'Specialfunktioner',
  WAIT_FIRMWARE: 'Firmware laddas upp och installeras',
  INSTALL_VERSION: 'Det här kommer {0} version {1}. Är du säker?',
  UPDATE_AVAILABLE: 'update available', // TODO translate
  LATEST_VERSION: 'Du använder den senaste {0} firmwareversionen.',
  PLEASE_WAIT: 'Var god vänta',
  RESTARTING_PRE: 'Initialiserar',
  RESTARTING_POST: 'Förbereder',
  AUTO_SCROLL: 'Autoskrolla',
  DASHBOARD: 'Kontrollpanel',
  DEVELOPER_MODE: 'Utvecklarläge',
  BYTES: 'Bytes', // TODO translate
  BITMASK: 'Bit Mask',// TODO translate
  DUPLICATE: 'Dublett',
  DASHBOARD_1: 'All EMS entities that are active and marked as Favorite, plus all Custom Entities, Schedules and external Sensors data are displayed below.', // TODO translate
  NO_DATA_1: 'No favorite EMS entities found yet. Use the', // TODO translate
  NO_DATA_2: 'module to mark them.', // TODO translate
  NO_DATA_3: 'To see all available entities go to', // TODO translate
  THIS_VERSION: 'This Version', // TODO translate
  PLATFORM: 'Platform', // TODO translate
  RELEASE_TYPE: 'Release Type', // TODO translate
  INTERNET_CONNECTION_REQUIRED: 'Internetanslutning krävs för automatisk version kontroll och uppdatering',
  SWITCH_RELEASE_TYPE: 'Byt till {0} version'
};

export default sv;

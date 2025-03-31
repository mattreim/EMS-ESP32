#ifndef WebStatusService_h
#define WebStatusService_h

#define EMSESP_SYSTEM_STATUS_SERVICE_PATH "/rest/systemStatus"
#define EMSESP_ACTION_SERVICE_PATH "/rest/action"

#include <semver200.h> // for version checking
#include "../emsesp_version.h"

namespace emsesp {

class WebStatusService {
  public:
    WebStatusService(AsyncWebServer * server, SecurityManager * securityManager);
    void set_current_version(const std::string & version) {
        current_version_s = version;
    }
    std::string get_current_version() {
        return current_version_s;
    }

// make action function public so we can test in the debug and standalone mode
#ifndef EMSESP_STANDALONE
  protected:
#endif
    void systemStatus(AsyncWebServerRequest * request);
    void action(AsyncWebServerRequest * request, JsonVariant json);

  private:
    SecurityManager * _securityManager;

    // actions
    bool checkUpgrade(JsonObject root, std::string & latest_version);
    bool exportData(JsonObject root, std::string & type);
    bool getCustomSupport(JsonObject root);
    bool uploadURL(const char * url);
    bool setSystemStatus(const char * status);
    void allvalues(JsonObject output);

    std::string current_version_s = EMSESP_APP_VERSION;
};

} // namespace emsesp

#endif

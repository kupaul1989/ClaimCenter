package exv.twilio.coversation

uses exv.twilio.common.MessageUtil
uses gw.servlet.Servlet

uses javax.servlet.http.HttpServlet
uses javax.servlet.http.HttpServletRequest
uses javax.servlet.http.HttpServletResponse

@Servlet("/sms/incomingsmsreceive")
class TwilioSMSReceiver extends HttpServlet {

  protected override function doPost(req: HttpServletRequest, resp: HttpServletResponse) {
    resp.setContentType("application/json")
    handleRequest(req, resp)
  }

  private function handleRequest (request: HttpServletRequest, response: HttpServletResponse) {
    var util = new MessageUtil()
    var sms = util.createAndSaveIncomingMessage(request)
  }
}
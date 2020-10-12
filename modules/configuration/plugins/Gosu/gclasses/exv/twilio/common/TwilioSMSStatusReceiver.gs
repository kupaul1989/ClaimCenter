package exv.twilio.common

uses javax.servlet.http.HttpServlet
uses javax.servlet.http.HttpServletResponse
uses javax.servlet.http.HttpServletRequest

uses exv.twilio.common.MessageUtil
uses gw.servlet.Servlet


@Servlet("/sms/statuscallback")
class TwilioSMSStatusReceiver extends HttpServlet{
  override function doPost(req: HttpServletRequest, resp: HttpServletResponse) {
    resp.setContentType("application/json")
    handleRequest(req, resp)
  }

  function handleRequest(req: HttpServletRequest, resp: HttpServletResponse) {
     var messageSid = req.getParameter("MessageSid")
     var messageStatus = req.getParameter("SmsStatus")
     var util = new MessageUtil()
     util.updateMessageStatus(messageSid, messageStatus)
  }


}
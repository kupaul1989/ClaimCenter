package exv.twilio.notification

uses gw.api.util.DateUtil
uses gw.plugin.messaging.MessageTransport
uses org.json.simple.JSONObject
uses org.json.simple.JSONValue

uses java.io.BufferedReader
uses java.io.InputStreamReader


class TwilioMessageTransport implements MessageTransport {

  override function suspend() {

  }

  override function shutdown() {

  }

  override function resume() {

  }

  override function send(message: Message, transformedPayload: String) {

    var sms =message.MessageRoot as TwilioSMS

    var twilioRequest = buildRequest(message, transformedPayload)
    var builder = new ProcessBuilder(twilioRequest)
    var process=builder.start()
    sms.Status = TwilioDeliveryStatus.TC_SENT
    sms.SendTime = DateUtil.currentDate()
    var reader = new BufferedReader(new InputStreamReader(process.getInputStream()))
    var response = reader.readLine()
    processResponse(message, response)

  }

  private function buildRequest(message : Message, payload : String) : ArrayList<String> {

    var sms = message.MessageRoot as TwilioSMS
    var adjuster = sms.ClaimContactID.Claim.AssignedUser
//    var accountSid= adjuster.TwilioAccountSID
//    var authToken= adjuster.TwilioAuthToken
    var accountSid= "AC211e6f598ac9dd5726baacdaa73998bf"
    var authToken= "19c3c1ab45dc70c54858f6ef65df54f5"

    // This needs to change as per your local ngrok url
       var statusCallBackUrl = "http://372bfb6c4288.ngrok.io/cc/service/sms/statuscallback"

    /***
     *   cURL is basically used to transfer data using Internet Protocols(Here HTTP requests) for the given URL.
     *   Curl is a Client side program. In the name cURL, c stands for Client.
     *   "-d" is used to send the post body content,
     *   "-u" is used for authorization purpose for Twilio
     */
    var command = {"curl" , "-X" ,"POST" ,
        "https://api.twilio.com/2010-04-01/Accounts/"+accountSid+"/Messages.json"  ,
        "-d", payload,
        "-d" , "StatusCallback="+statusCallBackUrl,
        "-u" ,  accountSid+":"+authToken  }
    return command
  }

  private function processResponse(message : Message, response : String) {

    var sms = message.MessageRoot as TwilioSMS

    var responseJsonObject = JSONValue.parse(response) as JSONObject


    if(responseJsonObject != null){
      message.reportAck()
    }
    var messageSid=responseJsonObject?.get("sid") as String

    if(messageSid!=null)
    {
      sms.MessageSid = messageSid
    }
}

  override function setDestinationID(i: int) {

  }
}
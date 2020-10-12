package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TwilioSMS.eti;TwilioSMS.eix;TwilioSMS.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TwilioSMSInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.EventAwareInternal {
  java.lang.String TWILIOSMSADDED_EVENT = "TwilioSMSAdded";
  
  java.lang.String TWILIOSMSCHANGED_EVENT = "TwilioSMSChanged";
  
  java.lang.String TWILIOSMSREMOVED_EVENT = "TwilioSMSRemoved";
  
  /**
   * Gets the value of the ClaimContactID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ClaimContact getClaimContactID();
  
  
  public gw.pl.persistence.core.Key getClaimContactIDID();
  
  
  /**
   * Gets the value of the FromNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFromNumber();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the MessageBody field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMessageBody();
  
  
  /**
   * Gets the value of the MessageSid field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMessageSid();
  
  
  /**
   * Gets the value of the ReceivedTime field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReceivedTime();
  
  
  /**
   * Gets the value of the SendTime field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getSendTime();
  
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TwilioDeliveryStatus getStatus();
  
  
  /**
   * Gets the value of the ToNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getToNumber();
  
  
  /**
   * Gets the value of the Type field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MessageType getType();
  
  
  /**
   * Gets the value of the TypeOfMsg field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TwilioSMSType getTypeOfMsg();
  
  
  /**
   * Sets the value of the ClaimContactID field.
   */
  public void setClaimContactID(entity.ClaimContact value);
  
  
  public void setClaimContactIDID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the FromNumber field.
   */
  public void setFromNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the MessageBody field.
   */
  public void setMessageBody(java.lang.String value);
  
  
  /**
   * Sets the value of the MessageSid field.
   */
  public void setMessageSid(java.lang.String value);
  
  
  /**
   * Sets the value of the ReceivedTime field.
   */
  public void setReceivedTime(java.util.Date value);
  
  
  /**
   * Sets the value of the SendTime field.
   */
  public void setSendTime(java.util.Date value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.TwilioDeliveryStatus value);
  
  
  /**
   * Sets the value of the ToNumber field.
   */
  public void setToNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.MessageType value);
  
  
  /**
   * Sets the value of the TypeOfMsg field.
   */
  public void setTypeOfMsg(typekey.TwilioSMSType value);
  
  
  
}
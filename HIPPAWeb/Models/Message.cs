using System;
using System.Collections.Generic;
using System.Xml.Serialization;


namespace HIPPAWeb.Models;

public partial class Message
{
    public long MessageId { get; set; }

    public long? UserId { get; set; }

    public string TestScenarioName { get; set; } = null!;
    
    public string? MessageXml { get; set; }

    public string? MessageText { get; set; }

    public bool? IsPrivate { get; set; }

    public byte IsActive { get; set; }

    public DateTime CreatedDate { get; set; }
}

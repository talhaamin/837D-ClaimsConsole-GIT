using System;
using System.Collections.Generic;

namespace HIPPAWeb.Models;

public partial class User
{
    public long UserId { get; set; }

    public string Email { get; set; } = null!;

    public byte IsActive { get; set; }

    public DateTime CreatedDate { get; set; }
}

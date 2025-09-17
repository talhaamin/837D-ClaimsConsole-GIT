using Microsoft.AspNetCore.Mvc;

namespace HIPPAWeb.Models.FormModels
{
    public class MessageModel
    {
        [BindProperty]
        public long? MessageId { get; set; }
        [BindProperty]
        public long? UserId { get; set; }
        [BindProperty]
        public string TestScenarioName { get; set; } = null!;
        [BindProperty]
        public string? MessageXml { get; set; }
        [BindProperty]
        public string? MessageText { get; set; }
        [BindProperty]
        public bool IsPrivate { get; set; }
        [BindProperty]
        public byte IsActive { get; set; }
        [BindProperty]
        public DateTime CreatedDate { get; set; }

    }
}

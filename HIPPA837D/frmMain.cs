using Newtonsoft.Json;
using System.Windows.Forms;
using System.Xml;

namespace HIPPA837D
{
    public partial class frmMain : Form
    {
        private string ediContent;
        private const char TabSpace = '\t';
        public frmMain()
        {
            InitializeComponent();
            ediContent = "";
        }


        private void parseEDIToolStripMenuItem_Click(object sender, EventArgs e)
        {
           

        }
        private string[] ParseHIPPA837D()
        {
           
            string[] strData = new string[3];
            string xmlOutput;
            try
            {
                xmlOutput = "<HIPAA837D>" + Environment.NewLine;
                // Split the EDI file into segments
                string[] segments = ediContent.Split(new string[] { "~" }, StringSplitOptions.RemoveEmptyEntries);
                xmlOutput += TabSpace + "<segments>" + Environment.NewLine;
                foreach (string segment in segments)
                {
                    string[] elements = segment.Split('*', StringSplitOptions.RemoveEmptyEntries);
                    if (segment != "" || segment!=null || segment!="\n")
                    {

                       
                        xmlOutput += TabSpace + " " + TabSpace + "<" + elements[0].Trim() + ">" + Environment.NewLine;
                        // Parse each segment


                        foreach (string element in elements)
                        {
                            xmlOutput += TabSpace + " " + TabSpace + " " + TabSpace + "<element>";
                            xmlOutput += element.Trim();
                            // Example: Handle ISA segment
                            if (element == "ISA")
                            {
                                string senderId = elements[6];
                                string receiverId = elements[8];
                                // Process ISA segment data
                            }

                            // You can create an XML representation of the parsed data if needed.
                            xmlOutput += "</element>" + Environment.NewLine;

                        }

                        // More segments can be processed similarly

                        // You can map the segments to an XML or other data structure
                        // for easier processing and manipulation.
                        // You can create an XML representation of the parsed data if needed.
                        xmlOutput += TabSpace + " " + TabSpace + "</" + elements[0].Trim() + ">" + Environment.NewLine;
                    }
                }
                xmlOutput += TabSpace + "</segments>" + Environment.NewLine; ;
                // You can create an XML representation of the parsed data if needed.
                xmlOutput += "</HIPAA837D>";

                // You can then parse this XML for further processing.
                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.LoadXml(xmlOutput);

                // Now you can work with the XML data as needed.
                strData[0] = string.Join("", segments);
                strData[1] = xmlOutput;
                strData[2] = JsonConvert.SerializeXmlNode(xmlDoc, Newtonsoft.Json.Formatting.Indented);


            }
            catch (Exception)
            {
                throw;
            }

            return strData;

        }
        private void LoadEDIToolStripMenuItem_Click(object sender, EventArgs e)
        {
            // Set properties of the openDlg
            openDlg.Title = "Open File Dialog"; // Dialog title
            openDlg.Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*"; // File filters
            openDlg.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments); // Initial directory

            // Show the dialog and capture the result
            DialogResult result = openDlg.ShowDialog();

            // Check if the user clicked the "OK" button in the dialog
            if (result == DialogResult.OK)
            {
                // Get the selected file's path
                string selectedFilePath = openDlg.FileName;

                // Perform any desired actions with the selected file path
                // For example, display it in a text box
                stLabel.Text = selectedFilePath;
                ediContent = "";
                ediContent = File.ReadAllText(selectedFilePath);
                rtEDI.Text = ediContent;
                //parsing also done at the time of loading
                hIPPA837DToolStripMenuItem_Click(sender, e);
            }
        }

        private void hIPPA837DToolStripMenuItem_Click(object sender, EventArgs e)
        {
            try
            {
                string[] strEDI;
                strEDI = ParseHIPPA837D();
                if (strEDI != null)
                {
                    tbpRawData.Text = "[" + hIPPA837DToolStripMenuItem.Text + "] Raw Data View" ;
                    tbpFormat.Text = "[" + hIPPA837DToolStripMenuItem.Text + "] XML View";
                    tbpJSON.Text = "[" + hIPPA837DToolStripMenuItem.Text + "] JSON View";
                    rtRaw.Text = strEDI[0];
                    rtFormat.Text = strEDI[1];
                    rtJSON.Text = strEDI[2];
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
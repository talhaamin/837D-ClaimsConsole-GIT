namespace HIPPA837D
{
    partial class frmMain
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.menmnuMainBar = new System.Windows.Forms.MenuStrip();
            this.fileToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.loadEDIToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.parseEDIToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.hIPPA837DToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.stBar = new System.Windows.Forms.StatusStrip();
            this.stLabel = new System.Windows.Forms.ToolStripStatusLabel();
            this.spConData = new System.Windows.Forms.SplitContainer();
            this.rtEDI = new System.Windows.Forms.RichTextBox();
            this.tbParseData = new System.Windows.Forms.TabControl();
            this.tbpFormat = new System.Windows.Forms.TabPage();
            this.rtFormat = new System.Windows.Forms.RichTextBox();
            this.tbpRawData = new System.Windows.Forms.TabPage();
            this.rtRaw = new System.Windows.Forms.RichTextBox();
            this.tbpJSON = new System.Windows.Forms.TabPage();
            this.rtJSON = new System.Windows.Forms.RichTextBox();
            this.openDlg = new System.Windows.Forms.OpenFileDialog();
            this.menmnuMainBar.SuspendLayout();
            this.stBar.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.spConData)).BeginInit();
            this.spConData.Panel1.SuspendLayout();
            this.spConData.Panel2.SuspendLayout();
            this.spConData.SuspendLayout();
            this.tbParseData.SuspendLayout();
            this.tbpFormat.SuspendLayout();
            this.tbpRawData.SuspendLayout();
            this.tbpJSON.SuspendLayout();
            this.SuspendLayout();
            // 
            // menmnuMainBar
            // 
            this.menmnuMainBar.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fileToolStripMenuItem});
            this.menmnuMainBar.Location = new System.Drawing.Point(0, 0);
            this.menmnuMainBar.Name = "menmnuMainBar";
            this.menmnuMainBar.Size = new System.Drawing.Size(1534, 24);
            this.menmnuMainBar.TabIndex = 1;
            this.menmnuMainBar.Text = "menuStrip1";
            // 
            // fileToolStripMenuItem
            // 
            this.fileToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.loadEDIToolStripMenuItem,
            this.parseEDIToolStripMenuItem});
            this.fileToolStripMenuItem.Name = "fileToolStripMenuItem";
            this.fileToolStripMenuItem.Size = new System.Drawing.Size(37, 20);
            this.fileToolStripMenuItem.Text = "&File";
            // 
            // loadEDIToolStripMenuItem
            // 
            this.loadEDIToolStripMenuItem.Name = "loadEDIToolStripMenuItem";
            this.loadEDIToolStripMenuItem.Size = new System.Drawing.Size(122, 22);
            this.loadEDIToolStripMenuItem.Text = "Load EDI";
            this.loadEDIToolStripMenuItem.Click += new System.EventHandler(this.LoadEDIToolStripMenuItem_Click);
            // 
            // parseEDIToolStripMenuItem
            // 
            this.parseEDIToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.hIPPA837DToolStripMenuItem});
            this.parseEDIToolStripMenuItem.Name = "parseEDIToolStripMenuItem";
            this.parseEDIToolStripMenuItem.Size = new System.Drawing.Size(122, 22);
            this.parseEDIToolStripMenuItem.Text = "Parse EDI";
            this.parseEDIToolStripMenuItem.Click += new System.EventHandler(this.parseEDIToolStripMenuItem_Click);
            // 
            // hIPPA837DToolStripMenuItem
            // 
            this.hIPPA837DToolStripMenuItem.Name = "hIPPA837DToolStripMenuItem";
            this.hIPPA837DToolStripMenuItem.Size = new System.Drawing.Size(138, 22);
            this.hIPPA837DToolStripMenuItem.Text = "HIPPA-837D";
            this.hIPPA837DToolStripMenuItem.Click += new System.EventHandler(this.hIPPA837DToolStripMenuItem_Click);
            // 
            // stBar
            // 
            this.stBar.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.stLabel});
            this.stBar.Location = new System.Drawing.Point(0, 684);
            this.stBar.Name = "stBar";
            this.stBar.Size = new System.Drawing.Size(1534, 22);
            this.stBar.TabIndex = 2;
            // 
            // stLabel
            // 
            this.stLabel.Name = "stLabel";
            this.stLabel.Size = new System.Drawing.Size(0, 17);
            // 
            // spConData
            // 
            this.spConData.Dock = System.Windows.Forms.DockStyle.Fill;
            this.spConData.Location = new System.Drawing.Point(0, 24);
            this.spConData.Name = "spConData";
            // 
            // spConData.Panel1
            // 
            this.spConData.Panel1.Controls.Add(this.rtEDI);
            // 
            // spConData.Panel2
            // 
            this.spConData.Panel2.Controls.Add(this.tbParseData);
            this.spConData.Size = new System.Drawing.Size(1534, 660);
            this.spConData.SplitterDistance = 770;
            this.spConData.TabIndex = 3;
            // 
            // rtEDI
            // 
            this.rtEDI.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.rtEDI.Dock = System.Windows.Forms.DockStyle.Fill;
            this.rtEDI.Location = new System.Drawing.Point(0, 0);
            this.rtEDI.Name = "rtEDI";
            this.rtEDI.Size = new System.Drawing.Size(770, 660);
            this.rtEDI.TabIndex = 0;
            this.rtEDI.Text = "";
            // 
            // tbParseData
            // 
            this.tbParseData.Controls.Add(this.tbpFormat);
            this.tbParseData.Controls.Add(this.tbpJSON);
            this.tbParseData.Controls.Add(this.tbpRawData);
            this.tbParseData.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tbParseData.Location = new System.Drawing.Point(0, 0);
            this.tbParseData.Name = "tbParseData";
            this.tbParseData.SelectedIndex = 0;
            this.tbParseData.Size = new System.Drawing.Size(760, 660);
            this.tbParseData.TabIndex = 0;
            // 
            // tbpFormat
            // 
            this.tbpFormat.Controls.Add(this.rtFormat);
            this.tbpFormat.Location = new System.Drawing.Point(4, 24);
            this.tbpFormat.Name = "tbpFormat";
            this.tbpFormat.Padding = new System.Windows.Forms.Padding(3);
            this.tbpFormat.Size = new System.Drawing.Size(752, 632);
            this.tbpFormat.TabIndex = 1;
            this.tbpFormat.Text = "XML View";
            this.tbpFormat.UseVisualStyleBackColor = true;
            // 
            // rtFormat
            // 
            this.rtFormat.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.rtFormat.Dock = System.Windows.Forms.DockStyle.Fill;
            this.rtFormat.Location = new System.Drawing.Point(3, 3);
            this.rtFormat.Name = "rtFormat";
            this.rtFormat.Size = new System.Drawing.Size(746, 626);
            this.rtFormat.TabIndex = 0;
            this.rtFormat.Text = "";
            // 
            // tbpRawData
            // 
            this.tbpRawData.Controls.Add(this.rtRaw);
            this.tbpRawData.Location = new System.Drawing.Point(4, 24);
            this.tbpRawData.Name = "tbpRawData";
            this.tbpRawData.Padding = new System.Windows.Forms.Padding(3);
            this.tbpRawData.Size = new System.Drawing.Size(752, 632);
            this.tbpRawData.TabIndex = 0;
            this.tbpRawData.Text = "Raw Data View";
            this.tbpRawData.UseVisualStyleBackColor = true;
            // 
            // rtRaw
            // 
            this.rtRaw.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.rtRaw.Dock = System.Windows.Forms.DockStyle.Fill;
            this.rtRaw.Location = new System.Drawing.Point(3, 3);
            this.rtRaw.Name = "rtRaw";
            this.rtRaw.Size = new System.Drawing.Size(746, 626);
            this.rtRaw.TabIndex = 0;
            this.rtRaw.Text = "";
            // 
            // tbpJSON
            // 
            this.tbpJSON.Controls.Add(this.rtJSON);
            this.tbpJSON.Location = new System.Drawing.Point(4, 24);
            this.tbpJSON.Name = "tbpJSON";
            this.tbpJSON.Size = new System.Drawing.Size(752, 632);
            this.tbpJSON.TabIndex = 2;
            this.tbpJSON.Text = "JSON View";
            this.tbpJSON.UseVisualStyleBackColor = true;
            // 
            // rtJSON
            // 
            this.rtJSON.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.rtJSON.Dock = System.Windows.Forms.DockStyle.Fill;
            this.rtJSON.Location = new System.Drawing.Point(0, 0);
            this.rtJSON.Name = "rtJSON";
            this.rtJSON.Size = new System.Drawing.Size(752, 632);
            this.rtJSON.TabIndex = 0;
            this.rtJSON.Text = "";
            // 
            // frmMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1534, 706);
            this.Controls.Add(this.spConData);
            this.Controls.Add(this.stBar);
            this.Controls.Add(this.menmnuMainBar);
            this.MainMenuStrip = this.menmnuMainBar;
            this.Name = "frmMain";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "EDI Viewer";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.menmnuMainBar.ResumeLayout(false);
            this.menmnuMainBar.PerformLayout();
            this.stBar.ResumeLayout(false);
            this.stBar.PerformLayout();
            this.spConData.Panel1.ResumeLayout(false);
            this.spConData.Panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.spConData)).EndInit();
            this.spConData.ResumeLayout(false);
            this.tbParseData.ResumeLayout(false);
            this.tbpFormat.ResumeLayout(false);
            this.tbpRawData.ResumeLayout(false);
            this.tbpJSON.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

      

        #endregion

        private MenuStrip menmnuMainBar;
        private ToolStripMenuItem fileToolStripMenuItem;
        private ToolStripMenuItem loadEDIToolStripMenuItem;
        private ToolStripMenuItem parseEDIToolStripMenuItem;
        private StatusStrip stBar;
        private SplitContainer spConData;
        private RichTextBox rtEDI;
        private TabControl tbParseData;
        private TabPage tbpRawData;
        private TabPage tbpFormat;
        private OpenFileDialog openDlg;
        private ToolStripStatusLabel stLabel;
        private RichTextBox rtRaw;
        private RichTextBox rtFormat;
        private ToolStripMenuItem hIPPA837DToolStripMenuItem;
        private TabPage tbpJSON;
        private RichTextBox rtJSON;
    }
}
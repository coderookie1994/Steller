import { Component, ViewChild, AfterViewInit, Input, OnInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  @ViewChild('editor') editor: AceEditorComponent;
  @Input() mode: string;

  ngOnInit() {
    
  }
  
  ngAfterViewInit() {
    // this.editor.getEditor().setOptions({
    //   enableBasicAutocompletion: true
    // });
    
    this.editor.setMode('ace/mode/' + this.mode);
    this.editor.setTheme('ace/theme/eclipse')

    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function (editor) {

      }
  })
  }
}

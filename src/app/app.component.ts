import { Component, OnInit, ViewChild } from '@angular/core';
import { Settings} from '@types/tinymce';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Angular';
  dataModel = ''
  @ViewChild('editor') editor:any

  ngOnInit(): void{
    setTimeout(()=>{
      this.dataModel ="Hi This Yuvaraj"
    },1000)
  }
  getInit() :Settings {
    return {
      menubar:false,
      branding:false,
  }
}

onButtonClick(){
  console.log(this.editor);
// tinymce.activeEditor.execCommand('mceInsertContent', false, "<b>some text</b>");

this.editor.editor.editorCommands.commands.exec.mceinsertcontent("<b>some text</b>")
}
}

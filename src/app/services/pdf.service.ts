import { Injectable } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { formatDate } from '@angular/common';
import { Http, ResponseContentType } from '@angular/http';
import * as saveAs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(
    private http:Http
  ) { }
  
  htmlPdf(html,fileName,loadingDialog){
    let content = "<html>";
    content += html;
    content += "</html>";
    let formdata = new FormData();
    let blob = new Blob([content], { type: "text/xml"});
    formdata.append('file', blob);
    formdata.append("file",blob,"index.html")
    formdata.append('targetformat', 'pdf');
    formdata.append('code', '86000');
    formdata.append('filelocation', 'local');
    fetch('https://s12.aconvert.com/convert/convert-batch-win.php', { method: 'POST', body: formdata })
        .then(res => {
          console.log("response comes")
          return res.json();
        }).then(resjson => {
          if(resjson.state == "ERROR"){
            console.log("bad response")
            return;
          }
          else{
            console.log("good response",resjson);
            let docfileUrl = resjson.filename;
            docfileUrl = 'https://s12.aconvert.com/convert/p3r68-cdx67/' + docfileUrl;
            fileName += ".pdf";
            this.download(docfileUrl,fileName);
            loadingDialog.dismiss();
      }
    })
    
  }
  download(url,fileName){
    this.http.get(url,{responseType:3}).subscribe(data=>{
      saveAs(data['_body'],fileName);
    })
  }
}

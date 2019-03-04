import { Component, OnInit, ChangeDetectionStrategy, SecurityContext } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SponsorsComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
    this.speakerdeckHtml = sanitizer.bypassSecurityTrustHtml('<script async class="speakerdeck-embed" data-id="f090aa94d5f54b1f9edc23c730d8f8df" data-ratio="1.77777777777778" src="https://speakerdeck.com/assets/embed.js"></script>');

    this.flickrHtml = sanitizer.bypassSecurityTrustHtml('<script src="https://flickrembed.com/embed_v2.js.rand.php?container=flickrembed_78&source=flickr&layout=responsive&input=www.flickr.com/photos/miccheng/sets/72157671986908232&sort=0&by=album&theme=default_notextpanel&scale=fit&limit=487&skin=default&autoplay=true"></script>');
  }

  ngOnInit() {
  }

}

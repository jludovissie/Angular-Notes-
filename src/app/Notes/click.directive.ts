import { Directive, OnInit, Renderer2, ElementRef, HostListener } from "@angular/core"

@Directive({
  selector: "[clickDirective]"
})

export class ClickDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef){}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement, 
      "border",
      "4px solid gold"
    )
  }
  @HostListener("mouseenter") mouseover(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "border",
      "4px solid gold"
    )
  }
  @HostListener("mouseleave") mouseleave(){
    this.renderer.setStyle(
      this.elementRef.nativeElement, 
      "border",
      "4px solid transparent"
    )
  }
}
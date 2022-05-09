import { Directive, OnInit, ElementRef } from "@angular/core"

@Directive({
  selector: "[basicBorder]",
})

export class BasicBorderDirective implements OnInit {
  constructor(private elementRef : ElementRef){}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.border = "4px solid black"
  }
}
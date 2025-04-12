import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export interface SelectTemplateContext<T> {
  $implicit: T;
}

@Directive({
  selector: '[appSelect]',
})
export class SelectDirective<T> {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  // @Input({ required: true }) appSelectFrom!: DataSource<T>;

  // Narrow the type of the context using the generic type of the directive.
  static ngTemplateContextGuard<T>(
    dir: SelectDirective<T>,
    ctx: any
  ): ctx is SelectTemplateContext<T> {
    // As before the guard body is not used at runtime, and included only to avoid
    // TypeScript errors.
    return true;
  }

  async ngOnInit() {
    // const data = await this.appSelectFrom.load();
    // this.viewContainerRef.createEmbeddedView(this.templateRef, {
    //   $implicit: data,
    // });
  }
}

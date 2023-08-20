import Component from "@/components/component";
import { nextjsLanguageLabel } from "@/helpers/snippets";

export default function Components() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-7 py-6">
        <h1 className="text-[40px] font-extrabold">Components</h1>
        <p className="text-[20px] font-semibold">
          This is a collection of components that I use in my projects.
        </p>
      </div>
      <div className="mx-auto px-7 max-w-7xl grid gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <Component
          title="Language Label"
          description="Language Label"
          component={<div>test</div>}
          nextjs={nextjsLanguageLabel}
          reactjs={nextjsLanguageLabel}
        ></Component>
      </div>
    </div>
  );
}

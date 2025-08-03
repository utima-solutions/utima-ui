import { BrainIcon } from 'lucide-react';

import { CopyRegistryButton } from '@/components/copy-registry-button';
import { OpenInV0Button } from '@/components/open-in-v0-button';
import PokemonPage from '@/registry/default/blocks/complex-component/page';
import { ExampleForm } from '@/registry/default/blocks/example-form/example-form';
import { ExampleCard } from '@/registry/default/blocks/example-with-css/example-card';
import { HelloWorld } from '@/registry/default/blocks/hello-world/hello-world';
import { IconButton } from '@/registry/default/ui/icon-button';
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className='max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8'>
      <header className='flex flex-col gap-1'>
        <h1 className='text-3xl font-bold tracking-tight'>Custom Registry</h1>
        <p className='text-muted-foreground'>
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className='flex flex-col flex-1 gap-8'>
        <div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
          <div className='flex items-center justify-between'>
            <h2 className='text-sm text-muted-foreground sm:pl-3'>
              An icon button
            </h2>
            <div className='flex gap-2'>
              <CopyRegistryButton name='icon-button' />
              <OpenInV0Button name='hello-world' className='w-fit' />
            </div>
          </div>
          <div className='flex items-center justify-center min-h-[400px] relative gap-3'>
            <IconButton>
              <BrainIcon />
            </IconButton>
            <IconButton variant='outline' loading>
              <BrainIcon />
            </IconButton>
            <IconButton variant='destructive'>
              <BrainIcon />
            </IconButton>
          </div>
        </div>

        <div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
          <div className='flex items-center justify-between'>
            <h2 className='text-sm text-muted-foreground sm:pl-3'>
              A simple hello world component
            </h2>
            <div className='flex gap-2'>
              <CopyRegistryButton name='hello-world' />
              <OpenInV0Button name='hello-world' className='w-fit' />
            </div>
          </div>
          <div className='flex items-center justify-center min-h-[400px] relative'>
            <HelloWorld />
          </div>
        </div>

        <div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
          <div className='flex items-center justify-between'>
            <h2 className='text-sm text-muted-foreground sm:pl-3'>
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name='example-form' className='w-fit' />
          </div>
          <div className='flex items-center justify-center min-h-[500px] relative'>
            <ExampleForm />
          </div>
        </div>

        <div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
          <div className='flex items-center justify-between'>
            <h2 className='text-sm text-muted-foreground sm:pl-3'>
              A complex component showing hooks, libs and components.
            </h2>
            <OpenInV0Button name='complex-component' className='w-fit' />
          </div>
          <div className='flex items-center justify-center min-h-[400px] relative'>
            <PokemonPage />
          </div>
        </div>

        <div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
          <div className='flex items-center justify-between'>
            <h2 className='text-sm text-muted-foreground sm:pl-3'>
              A login form with a CSS file.
            </h2>
            <OpenInV0Button name='example-with-css' className='w-fit' />
          </div>
          <div className='flex items-center justify-center min-h-[400px] relative'>
            <ExampleCard />
          </div>
        </div>
      </main>
    </div>
  );
}

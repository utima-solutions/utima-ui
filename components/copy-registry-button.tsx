'use client';

import { BookCopyIcon, CopyCheckIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

import { useRegistry } from '@/hooks/use-registry';
import { IconButton } from '@/registry/default/ui/icon-button';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export interface CopyRegistryButtonProps {
  name: string;
}

export function CopyRegistryButton({ name }: CopyRegistryButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { getComponentRegistryUrl } = useRegistry();

  const handleCopy = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();

      navigator.clipboard.writeText(getComponentRegistryUrl(name)).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 500);
      });
    },
    [getComponentRegistryUrl, name],
  );

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton size='sm' onClick={handleCopy}>
            {isCopied ? <CopyCheckIcon /> : <BookCopyIcon />}
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>Copy Registry</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

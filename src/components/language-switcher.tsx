import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import {
  Command,
  CommandList,
  CommandItem,
  CommandGroup,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'
import { languages } from '@/lib/languages'

export function LanguageSwitcher() {
  const [open, setOpen] = React.useState(false)
  const { i18n } = useTranslation()
  const [value, setValue] = React.useState(i18n.language.toUpperCase())
  const { t } = useTranslation()

  const handleLanguageChange = (newLangValue: string) => {
    const newLang = languages.find(lang => lang.code.toUpperCase() === newLangValue)?.code || 'pl'
    i18n.changeLanguage(newLang)
  }
  const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? languages.find(language => language.code.toUpperCase() === value)?.name
            : t('select_language')}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map(language => (
                <CommandItem
                  key={language.code}
                  value={language.code.toUpperCase()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                    handleLanguageChange(currentValue)
                  }}
                >
                  {language.name}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === language.code.toUpperCase() ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

import { useToast } from '@chakra-ui/react'

export default function CopyToClipboardToast() {
  const toast = useToast()
  return (
    <button
    onClick={() =>
      toast({
        position: 'bottom-left',
        render: () => (
          <div>
            Hello World
          </div>
        ),
      })
    }
  >
    Show Toast
  </button>
  )
}

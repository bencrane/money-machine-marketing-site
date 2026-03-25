import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.email('Please enter a valid email address'),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function useNewsletterForm() {
  return useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });
}

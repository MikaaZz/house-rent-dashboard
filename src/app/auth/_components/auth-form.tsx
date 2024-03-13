/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YCxuj7EJTbH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function AuthForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-2">
        <CardTitle>Sign in with email</CardTitle>
        <CardDescription>
          Enter your email address to sign in or create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" required type="email" />
          </div>
          <Button className="w-full">Send Magic Link</Button>
        </div>
      </CardContent>
    </Card>
  );
}

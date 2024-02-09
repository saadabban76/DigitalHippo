"use client";

import { Icons } from '@/components/Icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SignupSchema, TSignupSchema } from '@/lib/validators/account-credentials';


interface Prop {
    onSubmit: () => void;
}

const Page = () => {

    // custom ref to focus the email input when the page loads
    const emailRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (emailRef.current) {            
            emailRef.current.focus();
        }
    }, []);

  
    const { register, handleSubmit, formState: { errors } } = useForm<TSignupSchema>(
        {
            resolver: zodResolver(SignupSchema),
        }
    );

    const onSubmit = ({ email, password }: TSignupSchema) => {
        // send the data to server babyyy
    };

    return (
        <div className='container  min-h-screen relative flex flex-col items-center justify-center lg:px-0'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                <div className='flex flex-col items-center space-y-2 text-center'>
                    <Icons.logo className='h-20 w-20' />
                    <h1 className='text-2xl font-semibold tracking-tight'>
                        Create an account
                    </h1>

                    <Link
                        className={buttonVariants({
                            variant: 'link',
                            className: 'gap-1.5',
                        })}
                        href='/sign-in'>
                        Already have an account? Sign-in
                        <ArrowRight className='h-4 w-4' />
                    </Link>
                </div>

                <div className='grid gap-6'>
                    <form>
                        <div className='grid gap-2'>
                            <div className='grid gap-1 py-2'>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    {...register('email')}
                                    required={true}
                                    ref={emailRef}
                                    className={cn({
                                        'focus-visible:ring-red-500':
                                            true,
                                    })}
                                    placeholder='you@example.com'
                                />
                                {errors?.email && (
                                    <p className='text-sm text-red-500'>
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className='grid gap-1 py-2'>
                                <Label htmlFor='password'>Password</Label>
                                <Input
                                    {...register('password')}
                                    type='password'
                                    className={cn({
                                        'focus-visible:text-red-500':
                                            true,
                                    })}
                                    placeholder='Password'
                                />
                                {errors?.password && (
                                    <p className='text-sm text-red-500'>
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <Button>Sign up</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page
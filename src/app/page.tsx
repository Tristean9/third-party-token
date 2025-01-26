'use client';
import Image from 'next/image';
import {useRouter, useSearchParams} from 'next/navigation';
import React, {useState, useEffect, Suspense} from 'react';

const LoginForm: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [ID, setID] = useState('admin');
    const [password, setPassword] = useState('');

    const [ref, setRef] = useState('');

    useEffect(() => {
        setRef(searchParams.get('ref') || '');
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validRoles = ['user', 'guard', 'admin'];
        if (!validRoles.includes(ID)) {
            alert('角色不符合要求，请在user, guard, admin中进行选择');
            return;
        }
        router.push(`${ref}?patharmonyRole=${ID}` || 'http://localhost:3000/login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center">
                用户登录
            </h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                    账号
                </label>
                <input
                    type="text"
                    id="ID"
                    value={ID}
                    onChange={e => setID(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700">
                    密码
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    // required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-customRed text-black py-2 rounded"
            >
                登录
            </button>
        </form>
    );
};

const Landing: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm flex flex-col gap-10">
                <div>
                    <Image
                        src="/images/pkulogo_red.svg"
                        alt="logo"
                        className="mx-auto mt-20"
                        width={100}
                        height={100}
                    />
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default function LandingPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Landing />
        </Suspense>
    );
}

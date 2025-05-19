import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactForm() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async () => {
        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            toast.success("Message sent successfully!", {
                style: {
                    backgroundColor: "#0C8A5A",
                    color: "white",
                    transition: "all 0.3s ease-in-out",
                },
            });
            reset();
        } catch (error) {
            toast.error("Oops! Something went wrong.", {
                style: {
                    backgroundColor: "#FFA726",
                    color: "black",
                    transition: "all 0.3s ease-in-out",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="w-full max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Toaster position="top-center" />
            <motion.form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 text-s-text bg-bg-secundary/70 w-full md:w-lg p-6 rounded-lg shadow-lg mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Name */}
                <div className="mb-6">
                    <label className="block font-medium mb-1">Name</label>
                    <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        {...register("user_name", {
                            required: "Name is required",
                            minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters",
                            },
                            pattern: {
                                value: /^[A-Za-zÀ-ÿ\s'-]+$/,
                                message: "Name must contain only letters",
                            },
                        })}
                        name="user_name"
                        className="w-full p-2 border border-tx-neutral4/80 focus:outline-1 outline-accent-darker focus:border-transparent rounded-md"
                        placeholder="Jane Smith"
                    />
                    {errors.user_name && (
                        <motion.p
                            className="text-warning text-sm"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {errors.user_name.message}
                        </motion.p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-6">
                    <label className="block font-medium mb-1">Email</label>
                    <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        {...register("user_email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email",
                            },
                        })}
                        name="user_email"
                        className="w-full p-2 border border-tx-neutral4/80 focus:outline-1 outline-accent-darker focus:border-transparent rounded-md"
                        placeholder="name@example.com"
                    />
                    {errors.user_email && (
                        <motion.p
                            className="text-warning text-sm"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {errors.user_email.message}
                        </motion.p>
                    )}
                </div>

                {/* Message */}
                <div className="mb-6">
                    <label className="block font-medium mb-1">Message</label>
                    <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message: "Message must be at least 10 characters long",
                            },
                        })}
                        name="message"
                        className="w-full p-2 border border-tx-neutral4/80 ring-accent rounded-md bg-s-text text-bg-neutral1"
                        rows={5}
                        placeholder="Your message..."
                    />
                    {errors.message && (
                        <motion.p
                            className="text-warning text-sm"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {errors.message.message}
                        </motion.p>
                    )}
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={loading}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="bg-accent text-bg-primary px-4 py-2 rounded-md hover:bg-accent-darker cursor-pointer"
                >
                    {loading ? "Sending..." : "Send Message"}
                </motion.button>
            </motion.form>
        </motion.div>
    );
}

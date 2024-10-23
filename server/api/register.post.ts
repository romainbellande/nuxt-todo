import { z } from 'zod'
import prisma from '~/lib/prisma'
import bcrypt from 'bcryptjs'

const createUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    firstname: z.string().min(1),
    lastname: z.string().min(1)    
})

export default defineEventHandler(async (event) => {
    const result = await readValidatedBody(event, body => createUserSchema.safeParse(body))

    if (!result.success)
        // TODO: send a structured errormessage
        throw result.error.issues

    const { password, ...rest } = result.data

    return prisma.user.create({
        data: {
            ...rest,
            passwordHash: await bcrypt.hash(password, 10)
        }
    })
})
// eslint-disable-next-line import/extensions
import prisma from '@/lib/prisma';

async function testPrisma() {
  console.log('Prisma instance:', prisma);
  try {
    const contacts = await prisma.contact.findMany();
    console.log('Contacts:', contacts);
  } catch (error) {
    console.error('Prisma error:', error);
  }
}

testPrisma();

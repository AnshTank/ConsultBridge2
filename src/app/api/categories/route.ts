import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Category from '../../../models/Category';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const categories = await Category.find({}).sort({ createdAt: 1 });

    return NextResponse.json({
      success: true,
      data: categories
    });

  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
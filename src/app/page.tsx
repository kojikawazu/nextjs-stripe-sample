import { SupabaseClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from '@/lib/database.types';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const getAllLessons = async (
  supabase: SupabaseClient<Database>
) => {
  const { data: lessons } = await supabase.from("lesson").select("*");
  return lessons;
}

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const lessons = await getAllLessons(supabase);

  return (
    <main className="w-full max-w-3xl mx-auto my-16 px-2">
      <div>
        {lessons?.map((lesson) => (
          <Link href={`${lesson.id}`} key={lesson.id}>
            {lesson.title}

            <Card>
              <CardHeader>
                <CardTitle>{lesson.title}</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
              </CardHeader>
              <CardContent>
                <p>{lesson.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

/*
 * Copyright 2017-2021 John A. De Goes and the ZIO Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package zio

import com.github.ghik.silencer.silent

import java.lang.{System => JSystem}
import scala.collection.JavaConverters._

trait System extends Serializable {
  def env(variable: String): IO[SecurityException, Option[String]]

  def envOrElse(variable: String, alt: => String): IO[SecurityException, String]

  def envOrOption(variable: String, alt: => Option[String]): IO[SecurityException, Option[String]]

  def envs: IO[SecurityException, Map[String, String]]

  def lineSeparator: UIO[String]

  def properties: IO[Throwable, Map[String, String]]

  def property(prop: String): IO[Throwable, Option[String]]

  def propertyOrElse(prop: String, alt: => String): IO[Throwable, String]

  def propertyOrOption(prop: String, alt: => Option[String]): IO[Throwable, Option[String]]
}

object System extends Serializable {

  // Layer Definitions

  val any: ZLayer[Has[System], Nothing, Has[System]] =
    ZLayer.service[System]

  val live: Layer[Nothing, Has[System]] =
    ZLayer.succeed(SystemLive)

  object SystemLive extends System {
    def env(variable: String): IO[SecurityException, Option[String]] =
      IO.attempt(Option(JSystem.getenv(variable))).refineToOrDie[SecurityException]

    def envOrElse(variable: String, alt: => String): IO[SecurityException, String] =
      envOrElseWith(variable, alt)(env)

    def envOrOption(variable: String, alt: => Option[String]): IO[SecurityException, Option[String]] =
      envOrOptionWith(variable, alt)(env)

    @silent("JavaConverters")
    val envs: IO[SecurityException, Map[String, String]] =
      IO.attempt(JSystem.getenv.asScala.toMap).refineToOrDie[SecurityException]

    val lineSeparator: UIO[String] =
      IO.succeed(JSystem.lineSeparator)

    @silent("JavaConverters")
    val properties: IO[Throwable, Map[String, String]] =
      IO.attempt(JSystem.getProperties.asScala.toMap)

    def property(prop: String): IO[Throwable, Option[String]] =
      IO.attempt(Option(JSystem.getProperty(prop)))

    def propertyOrElse(prop: String, alt: => String): IO[Throwable, String] =
      propertyOrElseWith(prop, alt)(property)

    def propertyOrOption(prop: String, alt: => Option[String]): IO[Throwable, Option[String]] =
      propertyOrOptionWith(prop, alt)(property)

  }

  private[zio] def envOrElseWith(variable: String, alt: => String)(
    env: String => IO[SecurityException, Option[String]]
  ): IO[SecurityException, String] =
    env(variable).map(_.getOrElse(alt))

  private[zio] def envOrOptionWith(variable: String, alt: => Option[String])(
    env: String => IO[SecurityException, Option[String]]
  ): IO[SecurityException, Option[String]] =
    env(variable).map(_.orElse(alt))

  private[zio] def propertyOrElseWith(prop: String, alt: => String)(
    property: String => IO[Throwable, Option[String]]
  ): IO[Throwable, String] =
    property(prop).map(_.getOrElse(alt))

  private[zio] def propertyOrOptionWith(prop: String, alt: => Option[String])(
    property: String => IO[Throwable, Option[String]]
  ): IO[Throwable, Option[String]] =
    property(prop).map(_.orElse(alt))

  // Accessor Methods

  /**
   * Retrieves the value of an environment variable.
   */
  def env(variable: => String): ZIO[Has[System], SecurityException, Option[String]] =
    ZIO.accessZIO(_.get.env(variable))

  /**
   * Retrieves the value of an environment variable or else returns the
   * specified fallback value.
   */
  def envOrElse(variable: String, alt: => String): ZIO[Has[System], SecurityException, String] =
    ZIO.accessZIO(_.get.envOrElse(variable, alt))

  /**
   * Retrieves the value of an environment variable or else returns the
   * specified optional fallback value.
   */
  def envOrOption(variable: String, alt: => Option[String]): ZIO[Has[System], SecurityException, Option[String]] =
    ZIO.accessZIO(_.get.envOrOption(variable, alt))

  /**
   * Retrieves the values of all environment variables.
   */
  val envs: ZIO[Has[System], SecurityException, Map[String, String]] =
    ZIO.accessZIO(_.get.envs)

  /**
   * Retrieves the values of all system properties.
   */
  val properties: ZIO[Has[System], Throwable, Map[String, String]] =
    ZIO.accessZIO(_.get.properties)

  /**
   * Retrieves the value of a system property.
   */
  def property(prop: => String): ZIO[Has[System], Throwable, Option[String]] =
    ZIO.accessZIO(_.get.property(prop))

  /**
   * Retrieves the value of a system property or else return the specified
   * fallback value.
   */
  def propertyOrElse(prop: String, alt: => String): RIO[Has[System], String] =
    ZIO.accessZIO(_.get.propertyOrElse(prop, alt))

  /**
   * Retrieves the value of a system property or else return the specified
   * optional fallback value.
   */
  def propertyOrOption(prop: String, alt: => Option[String]): ZIO[Has[System], Throwable, Option[String]] =
    ZIO.accessZIO(_.get.propertyOrOption(prop, alt))

  /**
   * Retrieves the value of the system-specific line separator.
   */
  val lineSeparator: URIO[Has[System], String] =
    ZIO.accessZIO(_.get.lineSeparator)
}